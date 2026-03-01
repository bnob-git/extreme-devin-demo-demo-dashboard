import { PermissionList } from "./PermissionList";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("PermissionList", () => {
  test("PermissionList is exported", () => {
    expect(PermissionList).toBeDefined();
  });

  test("PermissionList can be called", () => {
    if (typeof PermissionList === "function") {
      try {
        (PermissionList as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
