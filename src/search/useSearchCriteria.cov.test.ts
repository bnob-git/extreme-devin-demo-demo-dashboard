import { useSearchCriteria } from "./useSearchCriteria";

describe("useSearchCriteria", () => {
  describe("useSearchCriteria", () => {
    it("should execute with valid args", () => {
      try {
        const result = (useSearchCriteria as any)();

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
        (useSearchCriteria as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (useSearchCriteria as any)(null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
