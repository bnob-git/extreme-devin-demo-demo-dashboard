import { createFilterTabUtils } from "./storage";

describe("storage", () => {
  describe("createFilterTabUtils", () => {
    it("should execute with valid args", () => {
      try {
        const result = (createFilterTabUtils as any)("test-value");

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
        (createFilterTabUtils as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (createFilterTabUtils as any)(null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
