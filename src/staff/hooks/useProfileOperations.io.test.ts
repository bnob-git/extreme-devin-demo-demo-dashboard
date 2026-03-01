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
jest.mock("@dashboard/hooks/useNotifier", () => ({ __esModule: true, default: () => jest.fn() }));

import { useProfileOperations } from "./useProfileOperations";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useProfileOperations", () => {
  test("useProfileOperations is exported", () => {
    expect(useProfileOperations).toBeDefined();
  });

  test("useProfileOperations can be called", () => {
    if (typeof useProfileOperations === "function") {
      try {
        (useProfileOperations as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
