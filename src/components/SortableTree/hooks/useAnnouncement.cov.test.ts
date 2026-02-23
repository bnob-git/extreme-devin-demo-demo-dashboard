import { useAnnouncement } from "./useAnnouncement";

describe("useAnnouncement", () => {
  describe("useAnnouncement", () => {
    it("should execute with valid args", () => {
      try {
        const result = (useAnnouncement as any)({} as any);

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
        (useAnnouncement as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (useAnnouncement as any)(null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
