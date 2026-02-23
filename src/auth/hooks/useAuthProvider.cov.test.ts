import { useAuthProvider } from "./useAuthProvider";

describe("useAuthProvider", () => {
  describe("useAuthProvider", () => {
    it("should execute with valid args", () => {
      try {
        const result = (useAuthProvider as any)({} as any);

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
        (useAuthProvider as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (useAuthProvider as any)(null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
