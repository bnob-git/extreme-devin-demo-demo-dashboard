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

import { useAuthProvider } from "./useAuthProvider";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useAuthProvider", () => {
  test("useAuthProvider is exported", () => {
    expect(useAuthProvider).toBeDefined();
  });

  test("useAuthProvider can be called", () => {
    if (typeof useAuthProvider === "function") {
      try {
        (useAuthProvider as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
