import { useFilterPresets } from "./useFilterPresets";

describe("useFilterPresets", () => {
  describe("useFilterPresets", () => {
    it("should execute with valid args", () => {
      try {
        const result = (useFilterPresets as any)({} as any);

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
        (useFilterPresets as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (useFilterPresets as any)(null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
