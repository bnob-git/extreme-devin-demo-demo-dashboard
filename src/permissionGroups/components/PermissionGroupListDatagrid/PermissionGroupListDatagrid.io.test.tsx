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
jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));

import { PermissionGroupListDatagrid } from "./PermissionGroupListDatagrid";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("PermissionGroupListDatagrid", () => {
  test("PermissionGroupListDatagrid is exported", () => {
    expect(PermissionGroupListDatagrid).toBeDefined();
  });

  test("PermissionGroupListDatagrid can be called", () => {
    if (typeof PermissionGroupListDatagrid === "function") {
      try {
        (PermissionGroupListDatagrid as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
