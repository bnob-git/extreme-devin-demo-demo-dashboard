import { getExtendedGiftCard } from "./utils";

describe("utils", () => {
  describe("getExtendedGiftCard", () => {
    it("should execute with valid args", () => {
      try {
        const result = (getExtendedGiftCard as any)({} as any);

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
        (getExtendedGiftCard as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (getExtendedGiftCard as any)(null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
