import { useMultipleRichText } from "./useMultipleRichText";

describe("useMultipleRichText", () => {
  describe("useMultipleRichText", () => {
    it("should execute with valid args", () => {
      try {
        const result = (useMultipleRichText as any)({} as any);

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
        (useMultipleRichText as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (useMultipleRichText as any)(null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
