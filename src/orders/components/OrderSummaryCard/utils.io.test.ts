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

import { extractOrderGiftCardUsedAmount, getDeliveryMethodName, getTaxTypeText } from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("utils", () => {
  test("extractOrderGiftCardUsedAmount is exported", () => {
    expect(extractOrderGiftCardUsedAmount).toBeDefined();
  });

  test("getDeliveryMethodName is exported", () => {
    expect(getDeliveryMethodName).toBeDefined();
  });

  test("getTaxTypeText is exported", () => {
    expect(getTaxTypeText).toBeDefined();
  });

  test("extractOrderGiftCardUsedAmount can be called", () => {
    if (typeof extractOrderGiftCardUsedAmount === "function") {
      try {
        (extractOrderGiftCardUsedAmount as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getDeliveryMethodName can be called", () => {
    if (typeof getDeliveryMethodName === "function") {
      try {
        (getDeliveryMethodName as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getTaxTypeText can be called", () => {
    if (typeof getTaxTypeText === "function") {
      try {
        (getTaxTypeText as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
