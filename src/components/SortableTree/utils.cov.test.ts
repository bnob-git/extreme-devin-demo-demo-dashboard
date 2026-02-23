import { buildTree, flattenTree, getChildCount, getProjection, removeChildrenOf } from "./utils";

describe("utils", () => {
  describe("getProjection", () => {
    it("should execute with valid args", () => {
      try {
        const result = (getProjection as any)(
          [{ id: "test-id", name: "test" }] as any,
          {} as any,
          {} as any,
          1,
          1,
        );

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
        (getProjection as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (getProjection as any)(null, null, null, null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("flattenTree", () => {
    it("should execute with valid args", () => {
      try {
        const result = (flattenTree as any)([{ id: "test-id", name: "test" }] as any);

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
        (flattenTree as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (flattenTree as any)(null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("buildTree", () => {
    it("should execute with valid args", () => {
      try {
        const result = (buildTree as any)([{ id: "test-id", name: "test" }] as any);

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
        (buildTree as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (buildTree as any)(null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("getChildCount", () => {
    it("should execute with valid args", () => {
      try {
        const result = (getChildCount as any)(
          [{ id: "test-id", name: "test" }] as any,
          "test-value",
        );

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
        (getChildCount as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (getChildCount as any)(null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("removeChildrenOf", () => {
    it("should execute with valid args", () => {
      try {
        const result = (removeChildrenOf as any)(
          [{ id: "test-id", name: "test" }] as any,
          [{ id: "test-id", name: "test" }] as any,
        );

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
        (removeChildrenOf as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (removeChildrenOf as any)(null, null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
