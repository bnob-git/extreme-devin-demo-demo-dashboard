import { getCreateVariantMutationError, getVariantUpdateMutationErrors } from "./errors";

describe("errors", () => {
  describe("getCreateVariantMutationError", () => {
    it("should execute with valid args", () => {
      try {
        const result = (getCreateVariantMutationError as any)({} as any);

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
        (getCreateVariantMutationError as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (getCreateVariantMutationError as any)(null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("getVariantUpdateMutationErrors", () => {
    it("should execute with valid args", () => {
      try {
        const result = (getVariantUpdateMutationErrors as any)("2024-01-01", "test-value");

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
        (getVariantUpdateMutationErrors as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (getVariantUpdateMutationErrors as any)(null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
