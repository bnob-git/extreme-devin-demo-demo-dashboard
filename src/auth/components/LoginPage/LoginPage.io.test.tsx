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
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "test-id" }),
  useNavigate: () => jest.fn(),
  useLocation: () => ({ pathname: "/", search: "", hash: "", state: null }),
  useSearchParams: () => [new URLSearchParams(), jest.fn()],
}));

import LoginPage from "./LoginPage";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("LoginPage", () => {
  test("default export is defined", () => {
    expect(LoginPage).toBeDefined();
  });
});
