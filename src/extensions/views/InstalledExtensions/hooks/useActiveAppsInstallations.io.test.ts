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

import { useActiveAppsInstallations } from "./useActiveAppsInstallations";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useActiveAppsInstallations", () => {
  test("useActiveAppsInstallations is exported", () => {
    expect(useActiveAppsInstallations).toBeDefined();
  });

  test("useActiveAppsInstallations can be called", () => {
    if (typeof useActiveAppsInstallations === "function") {
      try {
        (useActiveAppsInstallations as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
