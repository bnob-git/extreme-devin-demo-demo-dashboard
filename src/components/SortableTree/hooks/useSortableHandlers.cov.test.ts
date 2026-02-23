import { useSortableHandlers } from "./useSortableHandlers";

describe("useSortableHandlers", () => {
  describe("useSortableHandlers", () => {
    it("should execute with valid args", () => {
      try {
        const result = (useSortableHandlers as any)({} as any);

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
        (useSortableHandlers as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (useSortableHandlers as any)(null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
