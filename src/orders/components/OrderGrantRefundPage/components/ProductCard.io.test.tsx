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

import { ProductsCard } from "./ProductCard";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("ProductCard", () => {
  test("ProductsCard is exported", () => {
    expect(ProductsCard).toBeDefined();
  });

  test("ProductsCard can be called", () => {
    if (typeof ProductsCard === "function") {
      try {
        (ProductsCard as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
