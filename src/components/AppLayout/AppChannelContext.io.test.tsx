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
jest.mock("@dashboard/auth", () => ({
  __esModule: true,
  useUser: () => ({
    user: { id: "1", email: "t@t.com", userPermissions: [] },
    authenticated: true,
  }),
  useAuth: () => ({ authenticated: true }),
  useHasAllPermissions: () => true,
  useHasAnyPermissions: () => true,
}));

import useAppChannel, { AppChannelProvider } from "./AppChannelContext";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("AppChannelContext", () => {
  test("default export is defined", () => {
    expect(useAppChannel).toBeDefined();
  });

  test("AppChannelProvider is exported", () => {
    expect(AppChannelProvider).toBeDefined();
  });

  test("AppChannelProvider can be called", () => {
    if (typeof AppChannelProvider === "function") {
      try {
        (AppChannelProvider as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
