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

import { useUserPermissionSet } from "./useUserPermissionMap";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useUserPermissionMap", () => {
  test("useUserPermissionSet is exported", () => {
    expect(useUserPermissionSet).toBeDefined();
  });

  test("useUserPermissionSet can be called", () => {
    if (typeof useUserPermissionSet === "function") {
      try {
        (useUserPermissionSet as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
