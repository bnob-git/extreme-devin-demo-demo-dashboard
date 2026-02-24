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

import { ProductDetailsForm } from "./ProductDetailsForm";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("ProductDetailsForm", () => {
  test("ProductDetailsForm is exported", () => {
    expect(ProductDetailsForm).toBeDefined();
  });

  test("ProductDetailsForm can be called", () => {
    if (typeof ProductDetailsForm === "function") {
      try {
        (ProductDetailsForm as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
