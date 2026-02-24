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

import PageDetailsPage from "./PageDetailsPage";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("PageDetailsPage", () => {
  test("default export is defined", () => {
    expect(PageDetailsPage).toBeDefined();
  });
});
