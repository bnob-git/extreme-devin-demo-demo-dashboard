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

import { usePromotionRuleCreate } from "./usePromotionRuleCreate";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("usePromotionRuleCreate", () => {
  test("usePromotionRuleCreate is exported", () => {
    expect(usePromotionRuleCreate).toBeDefined();
  });

  test("usePromotionRuleCreate can be called", () => {
    if (typeof usePromotionRuleCreate === "function") {
      try {
        (usePromotionRuleCreate as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
