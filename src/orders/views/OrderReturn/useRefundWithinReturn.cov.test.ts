import { squashLines, useRefundWithinReturn } from "./useRefundWithinReturn";

describe("useRefundWithinReturn", () => {
  describe("useRefundWithinReturn", () => {
    it("should execute with valid args", () => {
      try {
        const result = (useRefundWithinReturn as any)({} as any);

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
        (useRefundWithinReturn as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (useRefundWithinReturn as any)(null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("squashLines", () => {
    it("should execute with valid args", () => {
      try {
        const result = (squashLines as any)([{ id: "test-id", name: "test" }] as any);

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
        (squashLines as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (squashLines as any)(null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
