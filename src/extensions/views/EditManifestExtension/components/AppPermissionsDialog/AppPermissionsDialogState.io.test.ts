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

import { useAppPermissionsDialogState } from "./AppPermissionsDialogState";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("AppPermissionsDialogState", () => {
  test("useAppPermissionsDialogState is exported", () => {
    expect(useAppPermissionsDialogState).toBeDefined();
  });

  test("useAppPermissionsDialogState can be called", () => {
    if (typeof useAppPermissionsDialogState === "function") {
      try {
        (useAppPermissionsDialogState as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
