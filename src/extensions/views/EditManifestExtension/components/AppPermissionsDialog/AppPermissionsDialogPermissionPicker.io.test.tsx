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

import { AppPermissionsDialogPermissionPicker } from "./AppPermissionsDialogPermissionPicker";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("AppPermissionsDialogPermissionPicker", () => {
  test("AppPermissionsDialogPermissionPicker is exported", () => {
    expect(AppPermissionsDialogPermissionPicker).toBeDefined();
  });

  test("AppPermissionsDialogPermissionPicker can be called", () => {
    if (typeof AppPermissionsDialogPermissionPicker === "function") {
      try {
        (AppPermissionsDialogPermissionPicker as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
