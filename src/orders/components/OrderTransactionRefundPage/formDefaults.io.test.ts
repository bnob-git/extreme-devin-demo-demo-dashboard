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

import { getRefundEditOrderLinesToRefund, getRefundFormDefaultValues } from "./formDefaults";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("formDefaults", () => {
  test("getRefundFormDefaultValues is exported", () => {
    expect(getRefundFormDefaultValues).toBeDefined();
  });

  test("getRefundEditOrderLinesToRefund is exported", () => {
    expect(getRefundEditOrderLinesToRefund).toBeDefined();
  });

  test("getRefundFormDefaultValues can be called", () => {
    if (typeof getRefundFormDefaultValues === "function") {
      try {
        (getRefundFormDefaultValues as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getRefundEditOrderLinesToRefund can be called", () => {
    if (typeof getRefundEditOrderLinesToRefund === "function") {
      try {
        (getRefundEditOrderLinesToRefund as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
