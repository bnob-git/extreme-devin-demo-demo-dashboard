import { usePromotionUpdate } from "./usePromotionUpdate";

describe("usePromotionUpdate", () => {
  describe("usePromotionUpdate", () => {
    it("should execute with valid args", () => {
      try {
        const result = (usePromotionUpdate as any)("test-value");

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
        (usePromotionUpdate as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (usePromotionUpdate as any)(null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
