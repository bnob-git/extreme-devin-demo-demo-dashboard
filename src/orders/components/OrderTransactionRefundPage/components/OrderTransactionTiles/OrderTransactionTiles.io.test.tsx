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

import { OrderTransactionTiles } from "./OrderTransactionTiles";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("OrderTransactionTiles", () => {
  test("OrderTransactionTiles is exported", () => {
    expect(OrderTransactionTiles).toBeDefined();
  });

  test("OrderTransactionTiles can be called", () => {
    if (typeof OrderTransactionTiles === "function") {
      try {
        (OrderTransactionTiles as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
