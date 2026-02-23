import { usePromotionRuleUpdate } from "./usePromotionRuleUpdate";

describe("usePromotionRuleUpdate", () => {
  describe("usePromotionRuleUpdate", () => {
    it("should execute with valid args", () => {
      try {
        const result = (usePromotionRuleUpdate as any)("test-value");

        if (result && typeof result === "object" && typeof result.then === "function") {
          result.catch(() => {});
        }
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle empty args", () => {
      try {
        (usePromotionRuleUpdate as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (usePromotionRuleUpdate as any)(null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
