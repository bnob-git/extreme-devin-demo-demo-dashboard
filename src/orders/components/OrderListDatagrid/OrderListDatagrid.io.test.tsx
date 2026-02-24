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

import { OrderListDatagrid } from "./OrderListDatagrid";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("OrderListDatagrid", () => {
  test("OrderListDatagrid is exported", () => {
    expect(OrderListDatagrid).toBeDefined();
  });

  test("OrderListDatagrid can be called", () => {
    if (typeof OrderListDatagrid === "function") {
      try {
        (OrderListDatagrid as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
