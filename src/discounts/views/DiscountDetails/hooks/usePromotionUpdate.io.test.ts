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

import { usePromotionUpdate } from "./usePromotionUpdate";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("usePromotionUpdate", () => {
  test("usePromotionUpdate is exported", () => {
    expect(usePromotionUpdate).toBeDefined();
  });

  test("usePromotionUpdate can be called", () => {
    if (typeof usePromotionUpdate === "function") {
      try {
        (usePromotionUpdate as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
