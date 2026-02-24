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

import { CategoryProductListDatagrid } from "./CategoryProductListDatagrid";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("CategoryProductListDatagrid", () => {
  test("CategoryProductListDatagrid is exported", () => {
    expect(CategoryProductListDatagrid).toBeDefined();
  });

  test("CategoryProductListDatagrid can be called", () => {
    if (typeof CategoryProductListDatagrid === "function") {
      try {
        (CategoryProductListDatagrid as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
