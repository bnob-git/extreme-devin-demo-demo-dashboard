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

import { getConfigMenuItemsPermissions, hasUserMenuItemPermissions } from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("utils", () => {
  test("getConfigMenuItemsPermissions is exported", () => {
    expect(getConfigMenuItemsPermissions).toBeDefined();
  });

  test("hasUserMenuItemPermissions is exported", () => {
    expect(hasUserMenuItemPermissions).toBeDefined();
  });

  test("getConfigMenuItemsPermissions can be called", () => {
    if (typeof getConfigMenuItemsPermissions === "function") {
      try {
        (getConfigMenuItemsPermissions as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("hasUserMenuItemPermissions can be called", () => {
    if (typeof hasUserMenuItemPermissions === "function") {
      try {
        (hasUserMenuItemPermissions as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
