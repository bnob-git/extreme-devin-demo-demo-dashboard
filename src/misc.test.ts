import {
  OrderChargeStatusEnum,
  OrderStatus,
  OrderStatusFilter,
  PaymentChargeStatusEnum,
} from "./graphql";
import {
  capitalize,
  findInEnum,
  findValueInEnum,
  flatten,
  fuzzySearch,
  getById,
  getBySlug,
  getByUnmatchingId,
  getDatagridRowDataIndex,
  getDotColor,
  getFullName,
  getMutationErrors,
  getMutationProviderData,
  getMutationState,
  getMutationStatus,
  getStatusColor,
  getStringOrPlaceholder,
  getUserInitials,
  getUserName,
  isFirstColumn,
  joinDateTime,
  maybe,
  parseBoolean,
  parseLogMessage,
  renderCollection,
  splitDateTime,
  stopPropagation,
  transformAddressToAddressInput,
  transformAddressToForm,
  transformChargedStatus,
  transformOrderStatus,
  transformPaymentStatus,
  weight,
} from "./misc";
import { StatusType } from "./types";

// Mock intl
const mockIntl = {
  formatMessage: jest.fn((msg, values) => {
    if (values?.errorCode) return `Error: ${values.errorCode}`;

    if (values?.fieldName) return `Field: ${values.fieldName}`;

    return msg?.defaultMessage || msg?.id || "translated";
  }),
} as any;

describe("misc.ts", () => {
  describe("renderCollection", () => {
    it("should call renderItem with undefined when collection is undefined", () => {
      // Arrange
      const renderItem = jest.fn();

      // Act
      renderCollection(undefined, renderItem);
      // Assert
      expect(renderItem).toHaveBeenCalledWith(undefined, undefined, undefined);
    });

    it("should call renderEmpty when collection is empty and renderEmpty is provided", () => {
      // Arrange
      const renderItem = jest.fn();
      const renderEmpty = jest.fn(() => "empty");
      // Act
      const result = renderCollection([], renderItem, renderEmpty);

      // Assert
      expect(renderEmpty).toHaveBeenCalledWith([]);
      expect(result).toBe("empty");
    });

    it("should return null when collection is empty and no renderEmpty", () => {
      // Arrange
      const renderItem = jest.fn();
      // Act
      const result = renderCollection([], renderItem);

      // Assert
      expect(result).toBeNull();
    });

    it("should map collection items with renderItem", () => {
      // Arrange
      const items = [1, 2, 3];
      const renderItem = jest.fn(item => item! * 2);
      // Act
      const result = renderCollection(items, renderItem);

      // Assert
      expect(result).toEqual([2, 4, 6]);
    });
  });

  describe("weight", () => {
    it("should return null for empty string", () => {
      expect(weight("")).toBeNull();
    });

    it("should parse float from string", () => {
      expect(weight("10.5")).toBe(10.5);
    });
  });

  describe("transformPaymentStatus", () => {
    it("should transform PARTIALLY_CHARGED", () => {
      const result = transformPaymentStatus(PaymentChargeStatusEnum.PARTIALLY_CHARGED, mockIntl);

      expect(result.status).toBe(StatusType.INFO);
    });

    it("should transform FULLY_CHARGED", () => {
      const result = transformPaymentStatus(PaymentChargeStatusEnum.FULLY_CHARGED, mockIntl);

      expect(result.status).toBe(StatusType.SUCCESS);
    });

    it("should transform PARTIALLY_REFUNDED", () => {
      const result = transformPaymentStatus(PaymentChargeStatusEnum.PARTIALLY_REFUNDED, mockIntl);

      expect(result.status).toBe(StatusType.ATTENTION);
    });

    it("should transform FULLY_REFUNDED", () => {
      const result = transformPaymentStatus(PaymentChargeStatusEnum.FULLY_REFUNDED, mockIntl);

      expect(result.status).toBe(StatusType.NEUTRAL);
    });

    it("should transform PENDING", () => {
      const result = transformPaymentStatus(PaymentChargeStatusEnum.PENDING, mockIntl);

      expect(result.status).toBe(StatusType.WARNING);
    });

    it("should transform REFUSED", () => {
      const result = transformPaymentStatus(PaymentChargeStatusEnum.REFUSED, mockIntl);

      expect(result.status).toBe(StatusType.ERROR);
    });

    it("should transform CANCELLED", () => {
      const result = transformPaymentStatus(PaymentChargeStatusEnum.CANCELLED, mockIntl);

      expect(result.status).toBe(StatusType.ERROR);
    });

    it("should transform NOT_CHARGED", () => {
      const result = transformPaymentStatus(PaymentChargeStatusEnum.NOT_CHARGED, mockIntl);

      expect(result.status).toBe(StatusType.NEUTRAL);
    });

    it("should return ERROR for unknown status", () => {
      const result = transformPaymentStatus("UNKNOWN_STATUS", mockIntl);

      expect(result.status).toBe(StatusType.ERROR);
      expect(result.localized).toBe("UNKNOWN_STATUS");
    });
  });

  describe("transformChargedStatus", () => {
    it("should transform OVERCHARGED", () => {
      const result = transformChargedStatus(OrderChargeStatusEnum.OVERCHARGED, mockIntl);

      expect(result.status).toBe(StatusType.WARNING);
    });

    it("should return ERROR for other statuses", () => {
      const result = transformChargedStatus(OrderChargeStatusEnum.FULL, mockIntl);

      expect(result.status).toBe(StatusType.ERROR);
    });
  });

  describe("transformOrderStatus", () => {
    it("should transform FULFILLED", () => {
      const result = transformOrderStatus(OrderStatus.FULFILLED, mockIntl);

      expect(result.status).toBe(StatusType.SUCCESS);
    });

    it("should transform PARTIALLY_FULFILLED", () => {
      const result = transformOrderStatus(OrderStatus.PARTIALLY_FULFILLED, mockIntl);

      expect(result.status).toBe(StatusType.INFO);
    });

    it("should transform UNFULFILLED", () => {
      const result = transformOrderStatus(OrderStatus.UNFULFILLED, mockIntl);

      expect(result.status).toBe(StatusType.WARNING);
    });

    it("should transform CANCELED", () => {
      const result = transformOrderStatus(OrderStatus.CANCELED, mockIntl);

      expect(result.status).toBe(StatusType.ERROR);
    });

    it("should transform DRAFT", () => {
      const result = transformOrderStatus(OrderStatus.DRAFT, mockIntl);

      expect(result.status).toBe(StatusType.NEUTRAL);
    });

    it("should transform UNCONFIRMED", () => {
      const result = transformOrderStatus(OrderStatus.UNCONFIRMED, mockIntl);

      expect(result.status).toBe(StatusType.NEUTRAL);
    });

    it("should transform PARTIALLY_RETURNED", () => {
      const result = transformOrderStatus(OrderStatus.PARTIALLY_RETURNED, mockIntl);

      expect(result.status).toBe(StatusType.ATTENTION);
    });

    it("should transform RETURNED", () => {
      const result = transformOrderStatus(OrderStatus.RETURNED, mockIntl);

      expect(result.status).toBe(StatusType.NEUTRAL);
    });

    it("should transform READY_TO_CAPTURE", () => {
      const result = transformOrderStatus(OrderStatusFilter.READY_TO_CAPTURE, mockIntl);

      expect(result.status).toBe(StatusType.INFO);
    });

    it("should transform READY_TO_FULFILL", () => {
      const result = transformOrderStatus(OrderStatusFilter.READY_TO_FULFILL, mockIntl);

      expect(result.status).toBe(StatusType.INFO);
    });

    it("should transform EXPIRED", () => {
      const result = transformOrderStatus(OrderStatus.EXPIRED, mockIntl);

      expect(result.status).toBe(StatusType.NEUTRAL);
    });

    it("should return ERROR for unknown status", () => {
      const result = transformOrderStatus("UNKNOWN", mockIntl);

      expect(result.status).toBe(StatusType.ERROR);
    });
  });

  describe("transformAddressToForm", () => {
    it("should return empty fields when no data provided", () => {
      const result = transformAddressToForm();

      expect(result.city).toBe("");
      expect(result.country).toBe("");
      expect(result.firstName).toBe("");
    });

    it("should map address data to form fields", () => {
      const data = {
        city: "New York",
        cityArea: "Manhattan",
        companyName: "Test Corp",
        country: { code: "US", country: "United States" },
        countryArea: "NY",
        firstName: "John",
        lastName: "Doe",
        phone: "+1234567890",
        postalCode: "10001",
        streetAddress1: "123 Main St",
        streetAddress2: "Apt 4B",
      } as any;
      const result = transformAddressToForm(data);

      expect(result.city).toBe("New York");
      expect(result.country).toBe("US");
      expect(result.firstName).toBe("John");
    });
  });

  describe("maybe", () => {
    it("should return value when expression succeeds", () => {
      expect(maybe(() => 42)).toBe(42);
    });

    it("should return undefined when expression throws and no default", () => {
      expect(
        maybe(() => {
          throw new Error("fail");
        }),
      ).toBeUndefined();
    });

    it("should return default when expression throws", () => {
      expect(
        maybe(() => {
          throw new Error("fail");
        }, "default"),
      ).toBe("default");
    });

    it("should return default when result is undefined", () => {
      expect(maybe(() => undefined, "default")).toBe("default");
    });
  });

  describe("getMutationState", () => {
    it("should return loading when loading is true", () => {
      expect(getMutationState(true, true)).toBe("loading");
    });

    it("should return success when called and no errors", () => {
      expect(getMutationState(true, false, [])).toBe("success");
    });

    it("should return error when called and has errors", () => {
      expect(getMutationState(true, false, [{ message: "err" }] as any)).toBe("error");
    });

    it("should return default when not called", () => {
      expect(getMutationState(false, false)).toBe("default");
    });
  });

  describe("getMutationErrors", () => {
    it("should return empty array when no data", () => {
      expect(getMutationErrors({ data: null } as any)).toEqual([]);
    });

    it("should extract errors from mutation result", () => {
      const result = {
        data: {
          createProduct: {
            errors: [{ message: "error1" }],
          },
        },
      };

      expect(getMutationErrors(result as any)).toEqual([{ message: "error1" }]);
    });

    it("should handle results with nested results", () => {
      const result = {
        data: {
          bulkAction: {
            errors: [],
            results: [{ errors: [{ message: "nested" }] }],
          },
        },
      };

      expect(getMutationErrors(result as any)).toEqual([{ message: "nested" }]);
    });
  });

  describe("getMutationStatus", () => {
    it("should return mutation state based on opts", () => {
      expect(getMutationStatus({ called: false, loading: false, data: null } as any)).toBe(
        "default",
      );
    });
  });

  describe("getMutationProviderData", () => {
    it("should return mutate and opts", () => {
      const mutateFn = jest.fn();
      const opts = { called: true, loading: false } as any;
      const result = getMutationProviderData(mutateFn, opts);

      expect(result.opts).toBe(opts);
      expect(typeof result.mutate).toBe("function");
    });
  });

  describe("parseLogMessage", () => {
    it("should format voucher codes error message for multiple codes", () => {
      const result = parseLogMessage({
        intl: mockIntl,
        code: "INVALID",
        voucherCodes: ["CODE1", "CODE2"],
      });

      expect(result).toContain("CODE1");
      expect(result).toContain("CODE2");
    });

    it("should format single voucher code error message", () => {
      const result = parseLogMessage({
        intl: mockIntl,
        code: "INVALID",
        voucherCodes: ["CODE1"],
      });

      expect(result).toContain("CODE1");
    });

    it("should format base error message with field", () => {
      parseLogMessage({
        intl: mockIntl,
        code: "REQUIRED",
        field: "name",
      });

      expect(mockIntl.formatMessage).toHaveBeenCalled();
    });

    it("should format base error message without field", () => {
      parseLogMessage({
        intl: mockIntl,
        code: "REQUIRED",
      });

      expect(mockIntl.formatMessage).toHaveBeenCalled();
    });
  });

  describe("getUserName", () => {
    it("should return undefined for null user", () => {
      expect(getUserName(null)).toBeUndefined();
    });

    it("should return full name when first and last name exist", () => {
      expect(getUserName({ email: "test@test.com", firstName: "John", lastName: "Doe" })).toBe(
        "John Doe",
      );
    });

    it("should return email prefix when no name and returnEmail is false", () => {
      expect(getUserName({ email: "john@example.com" })).toBe("john");
    });

    it("should return full email when returnEmail is true", () => {
      expect(getUserName({ email: "john@example.com" }, true)).toBe("john@example.com");
    });
  });

  describe("getUserInitials", () => {
    it("should return initials from first and last name", () => {
      expect(getUserInitials({ email: "t@t.com", firstName: "John", lastName: "Doe" })).toBe("JD");
    });

    it("should return first two chars of email when no name", () => {
      expect(getUserInitials({ email: "john@test.com" })).toBe("JO");
    });

    it("should return undefined when no user", () => {
      expect(getUserInitials()).toBeUndefined();
    });
  });

  describe("stopPropagation", () => {
    it("should stop propagation and call callback", () => {
      const cb = jest.fn();
      const event = { stopPropagation: jest.fn() };
      const handler = stopPropagation(cb);

      handler(event as any);
      expect(event.stopPropagation).toHaveBeenCalled();
      expect(cb).toHaveBeenCalledWith(event);
    });
  });

  describe("joinDateTime", () => {
    it("should return null for empty date", () => {
      expect(joinDateTime("")).toBeNull();
    });

    it("should join date and time", () => {
      const result = joinDateTime("2023-01-15", "10:30");

      expect(result).toBeDefined();
      expect(result).toContain("2023-01-15");
    });

    it("should use 00:00 when time is not provided", () => {
      const result = joinDateTime("2023-01-15");

      expect(result).toBeDefined();
    });
  });

  describe("splitDateTime", () => {
    it("should return empty strings for empty input", () => {
      const result = splitDateTime("");

      expect(result).toEqual({ date: "", time: "" });
    });

    it("should split datetime into date and time", () => {
      const result = splitDateTime("2023-01-15T10:30:00Z");

      expect(result.date).toBe("2023-01-15");
      expect(result.time).toBe("10:30");
    });
  });

  describe("findInEnum", () => {
    it("should find key in enum", () => {
      const testEnum = { A: "a_val", B: "b_val" };

      expect(findInEnum("A", testEnum)).toBe("a_val");
    });

    it("should throw for missing key", () => {
      const testEnum = { A: "a_val" };

      expect(() => findInEnum("C", testEnum)).toThrow("Key C not found in enum");
    });
  });

  describe("findValueInEnum", () => {
    it("should find value in enum", () => {
      const testEnum = { A: "a_val", B: "b_val" };

      expect(findValueInEnum("a_val", testEnum)).toBe("a_val");
    });

    it("should throw for missing value", () => {
      const testEnum = { A: "a_val" };

      expect(() => findValueInEnum("c_val", testEnum)).toThrow("Value c_val not found in enum");
    });
  });

  describe("parseBoolean", () => {
    it("should return default for undefined", () => {
      expect(parseBoolean(undefined, true)).toBe(true);
      expect(parseBoolean(undefined, false)).toBe(false);
    });

    it("should parse 'true' to true", () => {
      expect(parseBoolean("true", false)).toBe(true);
    });

    it("should parse other values to false", () => {
      expect(parseBoolean("false", true)).toBe(false);
      expect(parseBoolean("anything", true)).toBe(false);
    });
  });

  describe("capitalize", () => {
    it("should capitalize first letter", () => {
      expect(capitalize("hello")).toBe("Hello");
    });

    it("should handle single character", () => {
      expect(capitalize("a")).toBe("A");
    });
  });

  describe("getStringOrPlaceholder", () => {
    it("should return string when provided", () => {
      expect(getStringOrPlaceholder("test")).toBe("test");
    });

    it("should return placeholder when string is undefined", () => {
      expect(getStringOrPlaceholder(undefined, "N/A")).toBe("N/A");
    });

    it("should return ... when no string or placeholder", () => {
      expect(getStringOrPlaceholder(undefined)).toBe("...");
    });
  });

  describe("getFullName", () => {
    it("should return full name", () => {
      expect(getFullName({ firstName: "John", lastName: "Doe" })).toBe("John Doe");
    });

    it("should return empty string when no name", () => {
      expect(getFullName({ firstName: "", lastName: "" })).toBe("");
    });

    it("should return empty string for falsy data", () => {
      expect(getFullName(null as any)).toBe("");
    });
  });

  describe("flatten", () => {
    it("should flatten nested object", () => {
      const obj = { a: 1, b: { c: 2, d: 3 } };

      expect(flatten(obj)).toEqual({ a: 1, c: 2, d: 3 });
    });

    it("should handle flat object", () => {
      const obj = { a: 1, b: 2 };

      expect(flatten(obj)).toEqual({ a: 1, b: 2 });
    });
  });

  describe("getBySlug", () => {
    it("should return predicate that matches slug", () => {
      expect(getBySlug("test")({ slug: "test" })).toBe(true);
      expect(getBySlug("test")({ slug: "other" })).toBe(false);
    });
  });

  describe("getById", () => {
    it("should return predicate that matches id", () => {
      expect(getById("1")({ id: "1" })).toBe(true);
      expect(getById("1")({ id: "2" })).toBe(false);
    });
  });

  describe("getByUnmatchingId", () => {
    it("should return predicate that excludes id", () => {
      expect(getByUnmatchingId("1")({ id: "1" })).toBe(false);
      expect(getByUnmatchingId("1")({ id: "2" })).toBe(true);
    });
  });

  describe("getStatusColor", () => {
    it("should return light theme color for defaultLight", () => {
      const result = getStatusColor({ status: "error", currentTheme: "defaultLight" });

      expect(result).toBeDefined();
    });

    it("should return dark theme color for defaultDark", () => {
      const result = getStatusColor({ status: "success", currentTheme: "defaultDark" });

      expect(result).toBeDefined();
    });

    it("should handle all status types", () => {
      const statuses = ["error", "warning", "info", "success", "neutral", "attention", "generic"];

      statuses.forEach(status => {
        const result = getStatusColor({ status: status as any, currentTheme: "defaultLight" });

        expect(result).toBeDefined();
      });
    });
  });

  describe("getDotColor", () => {
    it("should return color for success status", () => {
      const themeValues = { colors: { background: { critical2: "red", warning1: "yellow" } } };

      expect(getDotColor("success", themeValues as any)).toBe("hsla(173, 100%, 26%, 1)");
    });

    it("should return color for error status", () => {
      const themeValues = { colors: { background: { critical2: "red", warning1: "yellow" } } };

      expect(getDotColor("error", themeValues as any)).toBe("red");
    });

    it("should return color for warning status", () => {
      const themeValues = { colors: { background: { critical2: "red", warning1: "yellow" } } };

      expect(getDotColor("warning", themeValues as any)).toBe("yellow");
    });
  });

  describe("isFirstColumn", () => {
    it("should return true for -1", () => {
      expect(isFirstColumn(-1)).toBe(true);
    });

    it("should return true for 0", () => {
      expect(isFirstColumn(0)).toBe(true);
    });

    it("should return false for other values", () => {
      expect(isFirstColumn(1)).toBe(false);
      expect(isFirstColumn(5)).toBe(false);
    });
  });

  describe("getDatagridRowDataIndex", () => {
    it("should return correct index with no removed rows", () => {
      expect(getDatagridRowDataIndex(5, [])).toBe(5);
    });

    it("should offset by removed rows before the index", () => {
      expect(getDatagridRowDataIndex(3, [1, 2])).toBe(5);
    });

    it("should not offset by removed rows after the index", () => {
      expect(getDatagridRowDataIndex(1, [5, 6])).toBe(1);
    });
  });

  describe("fuzzySearch", () => {
    it("should return full array when no query", () => {
      const items = [{ name: "apple" }, { name: "banana" }];

      expect(fuzzySearch(items, undefined, ["name"])).toEqual(items);
    });

    it("should return empty query matches", () => {
      const items = [{ name: "apple" }, { name: "banana" }];

      expect(fuzzySearch(items, "", ["name"])).toEqual(items);
    });

    it("should filter items by query", () => {
      const items = [{ name: "apple" }, { name: "banana" }, { name: "apricot" }];
      const result = fuzzySearch(items, "apple", ["name"]);

      expect(result.length).toBeGreaterThanOrEqual(1);
      expect(result[0].name).toBe("apple");
    });
  });

  describe("transformAddressToAddressInput", () => {
    it("should map address data with valid country code", () => {
      const data = {
        city: "Berlin",
        cityArea: "",
        companyName: "",
        country: { code: "DE", country: "Germany" },
        countryArea: "",
        firstName: "Hans",
        lastName: "Mueller",
        phone: "",
        postalCode: "10115",
        streetAddress1: "Unter den Linden 1",
        streetAddress2: "",
      } as any;
      const result = transformAddressToAddressInput(data);

      expect(result.city).toBe("Berlin");
      expect(result.firstName).toBe("Hans");
    });
  });
});
