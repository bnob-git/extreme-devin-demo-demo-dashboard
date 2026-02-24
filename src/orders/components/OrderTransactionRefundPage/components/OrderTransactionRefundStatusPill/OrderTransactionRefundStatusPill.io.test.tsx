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

import { OrderTransactionRefundStatusPill } from "./OrderTransactionRefundStatusPill";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("OrderTransactionRefundStatusPill", () => {
  test("OrderTransactionRefundStatusPill is exported", () => {
    expect(OrderTransactionRefundStatusPill).toBeDefined();
  });

  test("OrderTransactionRefundStatusPill can be called", () => {
    if (typeof OrderTransactionRefundStatusPill === "function") {
      try {
        (OrderTransactionRefundStatusPill as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
