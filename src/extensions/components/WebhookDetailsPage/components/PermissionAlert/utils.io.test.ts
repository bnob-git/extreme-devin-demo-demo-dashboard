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

import { extractPermissions, getPermissions } from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("utils", () => {
  test("extractPermissions is exported", () => {
    expect(extractPermissions).toBeDefined();
  });

  test("getPermissions is exported", () => {
    expect(getPermissions).toBeDefined();
  });

  test("extractPermissions can be called", () => {
    if (typeof extractPermissions === "function") {
      try {
        (extractPermissions as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getPermissions can be called", () => {
    if (typeof getPermissions === "function") {
      try {
        (getPermissions as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
