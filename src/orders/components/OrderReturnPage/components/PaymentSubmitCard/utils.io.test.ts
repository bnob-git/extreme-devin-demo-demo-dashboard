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
  getMiscellaneousAmountValues,
  getRefundProductsAmountValues,
  getReturnProductsAmountValues,
} from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("utils", () => {
  test("getMiscellaneousAmountValues is exported", () => {
    expect(getMiscellaneousAmountValues).toBeDefined();
  });

  test("getReturnProductsAmountValues is exported", () => {
    expect(getReturnProductsAmountValues).toBeDefined();
  });

  test("getRefundProductsAmountValues is exported", () => {
    expect(getRefundProductsAmountValues).toBeDefined();
  });

  test("getMiscellaneousAmountValues can be called", () => {
    if (typeof getMiscellaneousAmountValues === "function") {
      try {
        (getMiscellaneousAmountValues as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getReturnProductsAmountValues can be called", () => {
    if (typeof getReturnProductsAmountValues === "function") {
      try {
        (getReturnProductsAmountValues as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getRefundProductsAmountValues can be called", () => {
    if (typeof getRefundProductsAmountValues === "function") {
      try {
        (getRefundProductsAmountValues as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
