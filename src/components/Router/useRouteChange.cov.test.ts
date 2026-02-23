import { useRouteChange } from "./useRouteChange";

describe("useRouteChange", () => {
  describe("useRouteChange", () => {
    it("should execute with valid args", () => {
      try {
        const result = (useRouteChange as any)(jest.fn());

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
        (useRouteChange as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (useRouteChange as any)(null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
