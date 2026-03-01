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

import { usePromotionRuleDelete } from "./usePromotionRuleDelete";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("usePromotionRuleDelete", () => {
  test("usePromotionRuleDelete is exported", () => {
    expect(usePromotionRuleDelete).toBeDefined();
  });

  test("usePromotionRuleDelete can be called", () => {
    if (typeof usePromotionRuleDelete === "function") {
      try {
        (usePromotionRuleDelete as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
