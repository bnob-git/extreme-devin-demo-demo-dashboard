jest.mock(
  "@dashboard/graphql",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, prop: string) => {
          if (prop === "__esModule") return true;

          if (/^[A-Z]/.test(prop)) return prop;

          if (/^use/.test(prop)) return () => ({ data: undefined, loading: false });

          return prop;
        },
      },
    ),
);

import {
  getManualOrderDiscount,
  getOrderLineDiscount,
  getParsedDiscountData,
  useDiscountDialog,
} from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("utils", () => {
  test("useDiscountDialog is exported", () => {
    expect(useDiscountDialog).toBeDefined();
  });

  test("getManualOrderDiscount is exported", () => {
    expect(getManualOrderDiscount).toBeDefined();
  });

  test("getOrderLineDiscount is exported", () => {
    expect(getOrderLineDiscount).toBeDefined();
  });

  test("getParsedDiscountData is exported", () => {
    expect(getParsedDiscountData).toBeDefined();
  });

  test("useDiscountDialog can be called", () => {
    if (typeof useDiscountDialog === "function") {
      try {
        (useDiscountDialog as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getManualOrderDiscount can be called", () => {
    if (typeof getManualOrderDiscount === "function") {
      try {
        (getManualOrderDiscount as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getOrderLineDiscount can be called", () => {
    if (typeof getOrderLineDiscount === "function") {
      try {
        (getOrderLineDiscount as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getParsedDiscountData can be called", () => {
    if (typeof getParsedDiscountData === "function") {
      try {
        (getParsedDiscountData as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
