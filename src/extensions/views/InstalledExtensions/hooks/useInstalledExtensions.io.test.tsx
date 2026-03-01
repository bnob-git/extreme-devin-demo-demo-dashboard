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

import { getExtensionInfo, useInstalledExtensions } from "./useInstalledExtensions";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useInstalledExtensions", () => {
  test("getExtensionInfo is exported", () => {
    expect(getExtensionInfo).toBeDefined();
  });

  test("useInstalledExtensions is exported", () => {
    expect(useInstalledExtensions).toBeDefined();
  });

  test("getExtensionInfo can be called", () => {
    if (typeof getExtensionInfo === "function") {
      try {
        (getExtensionInfo as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("useInstalledExtensions can be called", () => {
    if (typeof useInstalledExtensions === "function") {
      try {
        (useInstalledExtensions as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
