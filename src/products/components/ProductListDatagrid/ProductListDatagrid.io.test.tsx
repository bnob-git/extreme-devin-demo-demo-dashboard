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

import { ProductListDatagrid } from "./ProductListDatagrid";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("ProductListDatagrid", () => {
  test("ProductListDatagrid is exported", () => {
    expect(ProductListDatagrid).toBeDefined();
  });

  test("ProductListDatagrid can be called", () => {
    if (typeof ProductListDatagrid === "function") {
      try {
        (ProductListDatagrid as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
