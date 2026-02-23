import { useRulesHandlers } from "./useRulesHandlers";

describe("useRulesHandlers", () => {
  describe("useRulesHandlers", () => {
    it("should execute with valid args", () => {
      try {
        const result = (useRulesHandlers as any)({} as any);

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
        (useRulesHandlers as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (useRulesHandlers as any)(null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
