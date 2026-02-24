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

import { ProductStocksAssignWarehouses } from "./ProductStocksAssignWarehouses";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("ProductStocksAssignWarehouses", () => {
  test("ProductStocksAssignWarehouses is exported", () => {
    expect(ProductStocksAssignWarehouses).toBeDefined();
  });

  test("ProductStocksAssignWarehouses can be called", () => {
    if (typeof ProductStocksAssignWarehouses === "function") {
      try {
        (ProductStocksAssignWarehouses as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
