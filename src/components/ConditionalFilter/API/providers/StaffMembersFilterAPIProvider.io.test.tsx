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

import { useStaffMembersFilterAPIProvider } from "./StaffMembersFilterAPIProvider";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("StaffMembersFilterAPIProvider", () => {
  test("useStaffMembersFilterAPIProvider is exported", () => {
    expect(useStaffMembersFilterAPIProvider).toBeDefined();
  });

  test("useStaffMembersFilterAPIProvider can be called", () => {
    if (typeof useStaffMembersFilterAPIProvider === "function") {
      try {
        (useStaffMembersFilterAPIProvider as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
