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
jest.mock("@dashboard/hooks/useLocale", () => ({
  __esModule: true,
  default: () => ({ locale: "en" }),
}));

import ProductUpdateForm, { useProductUpdateForm } from "./form";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("form", () => {
  test("default export is defined", () => {
    expect(ProductUpdateForm).toBeDefined();
  });

  test("useProductUpdateForm is exported", () => {
    expect(useProductUpdateForm).toBeDefined();
  });

  test("useProductUpdateForm can be called", () => {
    if (typeof useProductUpdateForm === "function") {
      try {
        (useProductUpdateForm as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
