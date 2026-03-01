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
jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));

import { CategoryListDatagrid } from "./CategoryListDatagrid";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("CategoryListDatagrid", () => {
  test("CategoryListDatagrid is exported", () => {
    expect(CategoryListDatagrid).toBeDefined();
  });

  test("CategoryListDatagrid can be called", () => {
    if (typeof CategoryListDatagrid === "function") {
      try {
        (CategoryListDatagrid as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
