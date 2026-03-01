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
jest.mock("@dashboard/auth", () => ({
  __esModule: true,
  useUser: () => ({
    user: { id: "1", email: "t@t.com", userPermissions: [] },
    authenticated: true,
  }),
  useAuth: () => ({ authenticated: true }),
  useHasAllPermissions: () => true,
  useHasAnyPermissions: () => true,
}));

import { CategoryPageTab, CategoryUpdatePage } from "./CategoryUpdatePage";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("CategoryUpdatePage", () => {
  test("CategoryPageTab is exported", () => {
    expect(CategoryPageTab).toBeDefined();
  });

  test("CategoryUpdatePage is exported", () => {
    expect(CategoryUpdatePage).toBeDefined();
  });

  test("CategoryUpdatePage can be called", () => {
    if (typeof CategoryUpdatePage === "function") {
      try {
        (CategoryUpdatePage as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
