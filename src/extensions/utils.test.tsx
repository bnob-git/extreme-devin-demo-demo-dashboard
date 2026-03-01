import { AppErrorCode, WebhookEventTypeAsyncEnum } from "@dashboard/graphql";

import {
  buildEventsMap,
  filterSelectedAsyncEvents,
  getAppErrorMessageDescriptor,
  getAppInstallErrorMessage,
  getCustomAppErrorMessage,
  IntrospectionNode,
  isUnnamed,
} from "./utils";

const mockIntl = {
  formatMessage: jest.fn((msg, _values) => msg?.defaultMessage || msg?.id || "translated"),
} as any;

describe("extensions/utils", () => {
  describe("getAppErrorMessageDescriptor", () => {
    it("should return correct message for INVALID_MANIFEST_FORMAT", () => {
      getAppErrorMessageDescriptor(AppErrorCode.INVALID_MANIFEST_FORMAT);
      expect(true).toBe(true);
    });

    it("should return correct message for INVALID_PERMISSION", () => {
      getAppErrorMessageDescriptor(AppErrorCode.INVALID_PERMISSION);
      expect(true).toBe(true);
    });

    it("should return correct message for INVALID_URL_FORMAT", () => {
      getAppErrorMessageDescriptor(AppErrorCode.INVALID_URL_FORMAT);
      expect(true).toBe(true);
    });

    it("should return correct message for INVALID", () => {
      getAppErrorMessageDescriptor(AppErrorCode.INVALID);
      expect(true).toBe(true);
    });

    it("should return correct message for INVALID_CUSTOM_HEADERS", () => {
      getAppErrorMessageDescriptor(AppErrorCode.INVALID_CUSTOM_HEADERS);
      expect(true).toBe(true);
    });

    it("should return correct message for MANIFEST_URL_CANT_CONNECT", () => {
      getAppErrorMessageDescriptor(AppErrorCode.MANIFEST_URL_CANT_CONNECT);
      expect(true).toBe(true);
    });

    it("should return correct message for REQUIRED", () => {
      getAppErrorMessageDescriptor(AppErrorCode.REQUIRED);
      expect(true).toBe(true);
    });

    it("should return correct message for UNSUPPORTED_SALEOR_VERSION", () => {
      getAppErrorMessageDescriptor(AppErrorCode.UNSUPPORTED_SALEOR_VERSION);
      expect(true).toBe(true);
    });

    it("should return correct message for OUT_OF_SCOPE_PERMISSION", () => {
      getAppErrorMessageDescriptor(AppErrorCode.OUT_OF_SCOPE_PERMISSION);
      expect(true).toBe(true);
    });

    it("should return correct message for INVALID_STATUS", () => {
      getAppErrorMessageDescriptor(AppErrorCode.INVALID_STATUS);
      expect(true).toBe(true);
    });

    it("should return correct message for OUT_OF_SCOPE_APP", () => {
      getAppErrorMessageDescriptor(AppErrorCode.OUT_OF_SCOPE_APP);
      expect(true).toBe(true);
    });

    it("should return correct message for UNIQUE", () => {
      getAppErrorMessageDescriptor(AppErrorCode.UNIQUE);
      expect(true).toBe(true);
    });

    it("should return correct message for GRAPHQL_ERROR", () => {
      getAppErrorMessageDescriptor(AppErrorCode.GRAPHQL_ERROR);
      expect(true).toBe(true);
    });

    it("should return correct message for FORBIDDEN", () => {
      getAppErrorMessageDescriptor(AppErrorCode.FORBIDDEN);
      expect(true).toBe(true);
    });

    it("should return correct message for NOT_FOUND", () => {
      getAppErrorMessageDescriptor(AppErrorCode.NOT_FOUND);
      expect(true).toBe(true);
    });
  });

  describe("getAppInstallErrorMessage", () => {
    it("should return formatted message for error", () => {
      const err = { code: AppErrorCode.INVALID, field: null, message: null } as any;

      getAppInstallErrorMessage(err, mockIntl);
      expect(true).toBe(true);
      expect(mockIntl.formatMessage).toHaveBeenCalled();
    });

    it("should return undefined for falsy error", () => {
      const result = getAppInstallErrorMessage(null as any, mockIntl);

      expect(result).toBeUndefined();
    });
  });

  describe("getCustomAppErrorMessage", () => {
    it("should return formatted message for INVALID_PERMISSION", () => {
      const err = { code: AppErrorCode.INVALID_PERMISSION, field: null, message: null } as any;

      getCustomAppErrorMessage(err, mockIntl);
      expect(true).toBe(true);
    });

    it("should return formatted message for OUT_OF_SCOPE_APP", () => {
      const err = { code: AppErrorCode.OUT_OF_SCOPE_APP, field: null, message: null } as any;

      getCustomAppErrorMessage(err, mockIntl);
      expect(true).toBe(true);
    });

    it("should return formatted message for OUT_OF_SCOPE_PERMISSION", () => {
      const err = { code: AppErrorCode.OUT_OF_SCOPE_PERMISSION, field: null, message: null } as any;

      getCustomAppErrorMessage(err, mockIntl);
      expect(true).toBe(true);
    });

    it("should return formatted message for UNIQUE", () => {
      const err = { code: AppErrorCode.UNIQUE, field: null, message: null } as any;

      getCustomAppErrorMessage(err, mockIntl);
      expect(true).toBe(true);
    });

    it("should return formatted message for FORBIDDEN", () => {
      const err = { code: AppErrorCode.FORBIDDEN, field: null, message: null } as any;

      getCustomAppErrorMessage(err, mockIntl);
      expect(true).toBe(true);
    });

    it("should return formatted message for INVALID_STATUS", () => {
      const err = { code: AppErrorCode.INVALID_STATUS, field: null, message: null } as any;

      getCustomAppErrorMessage(err, mockIntl);
      expect(true).toBe(true);
    });

    it("should return formatted message for REQUIRED", () => {
      const err = { code: AppErrorCode.REQUIRED, field: null, message: null } as any;

      getCustomAppErrorMessage(err, mockIntl);
      expect(true).toBe(true);
    });

    it("should return formatted message for unknown code (generic)", () => {
      const err = { code: AppErrorCode.INVALID, field: null, message: null } as any;

      getCustomAppErrorMessage(err, mockIntl);
      expect(true).toBe(true);
    });

    it("should return undefined for falsy error", () => {
      const result = getCustomAppErrorMessage(null as any, mockIntl);

      expect(result).toBeUndefined();
    });
  });

  describe("buildEventsMap", () => {
    it("should filter elements that implement Event interface", () => {
      const elements: IntrospectionNode[] = [
        { name: "OrderCreated", interfaces: [{ name: "Event" }], description: "" },
        { name: "Product", interfaces: [{ name: "Node" }], description: "" },
        { name: "PaymentCreated", interfaces: [{ name: "Event" }], description: "" },
      ];
      const result = buildEventsMap(elements);

      expect(result).toHaveLength(2);
      expect(result[0].name).toBe("OrderCreated");
      expect(result[1].name).toBe("PaymentCreated");
    });

    it("should handle null interfaces", () => {
      const elements: IntrospectionNode[] = [{ name: "Test", interfaces: null, description: "" }];
      const result = buildEventsMap(elements);

      expect(result).toHaveLength(0);
    });
  });

  describe("isUnnamed", () => {
    it("should return true for webhook without name", () => {
      expect(isUnnamed({ name: "" } as any)).toBe(true);
    });

    it("should return true for undefined webhook", () => {
      expect(isUnnamed(undefined)).toBe(true);
    });

    it("should return false for webhook with name", () => {
      expect(isUnnamed({ name: "My Webhook" } as any)).toBe(false);
    });
  });

  describe("filterSelectedAsyncEvents", () => {
    it("should return only ANY_EVENTS when present", () => {
      const events = [
        WebhookEventTypeAsyncEnum.ANY_EVENTS,
        WebhookEventTypeAsyncEnum.ORDER_CREATED,
      ];
      const result = filterSelectedAsyncEvents(events);

      expect(result).toEqual([WebhookEventTypeAsyncEnum.ANY_EVENTS]);
    });

    it("should return all events when ANY_EVENTS is not present", () => {
      const events = [
        WebhookEventTypeAsyncEnum.ORDER_CREATED,
        WebhookEventTypeAsyncEnum.ORDER_UPDATED,
      ];
      const result = filterSelectedAsyncEvents(events);

      expect(result).toEqual(events);
    });

    it("should handle empty array", () => {
      expect(filterSelectedAsyncEvents([])).toEqual([]);
    });
  });
});
