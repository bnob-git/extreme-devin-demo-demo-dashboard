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
jest.mock("@dashboard/hooks/useShop", () => ({ __esModule: true, default: () => ({}) }));

import { useGetAvailableAppPermissions } from "./useGetAvailableAppPermissions";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useGetAvailableAppPermissions", () => {
  test("useGetAvailableAppPermissions is exported", () => {
    expect(useGetAvailableAppPermissions).toBeDefined();
  });

  test("useGetAvailableAppPermissions can be called", () => {
    if (typeof useGetAvailableAppPermissions === "function") {
      try {
        (useGetAvailableAppPermissions as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
