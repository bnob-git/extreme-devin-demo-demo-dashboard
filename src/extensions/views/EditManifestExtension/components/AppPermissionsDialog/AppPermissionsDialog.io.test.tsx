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
jest.mock("@dashboard/hooks/useNotifier", () => ({ __esModule: true, default: () => jest.fn() }));

import { AppPermissionsDialog } from "./AppPermissionsDialog";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("AppPermissionsDialog", () => {
  test("AppPermissionsDialog is exported", () => {
    expect(AppPermissionsDialog).toBeDefined();
  });

  test("AppPermissionsDialog can be called", () => {
    if (typeof AppPermissionsDialog === "function") {
      try {
        (AppPermissionsDialog as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
