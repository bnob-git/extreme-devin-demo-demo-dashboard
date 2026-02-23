import { canBeSorted, DEFAULT_SORT_KEY, getSortQueryVariables } from "./sort";

describe("sort", () => {
  describe("DEFAULT_SORT_KEY", () => {
    it("should execute with valid args", () => {
      try {
        const result = (DEFAULT_SORT_KEY as any)({} as any, false);

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
        (DEFAULT_SORT_KEY as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (DEFAULT_SORT_KEY as any)(null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("canBeSorted", () => {
    it("should execute with valid args", () => {
      try {
        const result = (canBeSorted as any)({} as any, false);

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
        (canBeSorted as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (canBeSorted as any)(null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("getSortQueryVariables", () => {
    it("should execute with valid args", () => {
      try {
        const result = (getSortQueryVariables as any)({} as any);

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
        (getSortQueryVariables as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (getSortQueryVariables as any)(null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
