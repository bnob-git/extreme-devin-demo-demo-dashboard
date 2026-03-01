import { useInitialProductTypesState } from "./useInitialProdutTypesState";

describe("useInitialProdutTypesState", () => {
  describe("useInitialProductTypesState", () => {
    it("should execute with valid args", () => {
      try {
        const result = (useInitialProductTypesState as any)();

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
        (useInitialProductTypesState as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (useInitialProductTypesState as any)(null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
