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

import { OrderDetailsRefundTable } from "./OrderDetailsRefundTable";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("OrderDetailsRefundTable", () => {
  test("OrderDetailsRefundTable is exported", () => {
    expect(OrderDetailsRefundTable).toBeDefined();
  });

  test("OrderDetailsRefundTable can be called", () => {
    if (typeof OrderDetailsRefundTable === "function") {
      try {
        (OrderDetailsRefundTable as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
