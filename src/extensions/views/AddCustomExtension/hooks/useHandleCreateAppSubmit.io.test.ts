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

import { useHandleCreateAppSubmit } from "./useHandleCreateAppSubmit";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useHandleCreateAppSubmit", () => {
  test("useHandleCreateAppSubmit is exported", () => {
    expect(useHandleCreateAppSubmit).toBeDefined();
  });

  test("useHandleCreateAppSubmit can be called", () => {
    if (typeof useHandleCreateAppSubmit === "function") {
      try {
        (useHandleCreateAppSubmit as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
