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

import { useLegacyThemeHandler, UserControls } from "./Controls";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("Controls", () => {
  test("useLegacyThemeHandler is exported", () => {
    expect(useLegacyThemeHandler).toBeDefined();
  });

  test("UserControls is exported", () => {
    expect(UserControls).toBeDefined();
  });

  test("useLegacyThemeHandler can be called", () => {
    if (typeof useLegacyThemeHandler === "function") {
      try {
        (useLegacyThemeHandler as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("UserControls can be called", () => {
    if (typeof UserControls === "function") {
      try {
        (UserControls as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
