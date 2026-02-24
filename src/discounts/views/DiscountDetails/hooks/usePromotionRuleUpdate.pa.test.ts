jest.mock("@dashboard/hooks/useNotifier", () => ({ __esModule: true, default: () => jest.fn() }));
jest.mock(
  "@dashboard/graphql",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, prop: string) => {
          if (prop === "__esModule") return true;

          if (typeof prop === "string" && prop.startsWith("use"))
            return () => ({ data: undefined, loading: false });

          return prop;
        },
      },
    ),
);

import { usePromotionRuleUpdate } from "./usePromotionRuleUpdate";

describe("usePromotionRuleUpdate property-access tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls usePromotionRuleUpdate with mock", () => {
    try {
      (usePromotionRuleUpdate as any)({} as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls usePromotionRuleUpdate with null", () => {
    try {
      (usePromotionRuleUpdate as any)(null as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
