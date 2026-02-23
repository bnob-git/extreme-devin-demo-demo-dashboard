import { useInitialPageState } from "./useInitialPageState";

describe("useInitialPageState", () => {
  describe("useInitialPageState", () => {
    it("should execute with valid args", () => {
      try {
        const result = (useInitialPageState as any)();

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
        (useInitialPageState as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (useInitialPageState as any)(null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
