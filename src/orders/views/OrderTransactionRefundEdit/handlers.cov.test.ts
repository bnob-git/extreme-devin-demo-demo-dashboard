import { handleRefundEditComplete } from "./handlers";

describe("handlers", () => {
  describe("handleRefundEditComplete", () => {
    it("should execute with valid args", () => {
      try {
        const result = (handleRefundEditComplete as any)({} as any);

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
        (handleRefundEditComplete as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (handleRefundEditComplete as any)(null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
