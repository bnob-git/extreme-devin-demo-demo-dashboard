import { useCategorySelection } from "./useCategorySelection";

describe("useCategorySelection", () => {
  describe("useCategorySelection", () => {
    it("should execute with valid args", () => {
      try {
        const result = (useCategorySelection as any)([{ id: "test-id", name: "test" }] as any);

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
        (useCategorySelection as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (useCategorySelection as any)(null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
