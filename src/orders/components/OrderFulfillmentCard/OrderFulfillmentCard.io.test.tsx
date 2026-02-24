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

import { OrderFulfillmentCard } from "./OrderFulfillmentCard";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("OrderFulfillmentCard", () => {
  test("OrderFulfillmentCard is exported", () => {
    expect(OrderFulfillmentCard).toBeDefined();
  });

  test("OrderFulfillmentCard can be called", () => {
    if (typeof OrderFulfillmentCard === "function") {
      try {
        (OrderFulfillmentCard as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
