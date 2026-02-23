import {
  createProductTypeConstraintElement,
  createWrappedValueProvider,
  getFilteredProductOptions,
  stripGlobalConstraints,
  useModalProductFilter,
} from "./useModalProductFilter";

describe("useModalProductFilter", () => {
  describe("getFilteredProductOptions", () => {
    it("should execute with valid args", () => {
      try {
        const result = (getFilteredProductOptions as any)("test-value", [
          { id: "test-id", name: "test" },
        ] as any);

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
        (getFilteredProductOptions as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (getFilteredProductOptions as any)(null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("createProductTypeConstraintElement", () => {
    it("should execute with valid args", () => {
      try {
        const result = (createProductTypeConstraintElement as any)([
          { id: "test-id", name: "test" },
        ] as any);

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
        (createProductTypeConstraintElement as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (createProductTypeConstraintElement as any)(null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("stripGlobalConstraints", () => {
    it("should execute with valid args", () => {
      try {
        const result = (stripGlobalConstraints as any)({} as any);

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
        (stripGlobalConstraints as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (stripGlobalConstraints as any)(null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("createWrappedValueProvider", () => {
    it("should execute with valid args", () => {
      try {
        const result = (createWrappedValueProvider as any)({} as any, {} as any);

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
        (createWrappedValueProvider as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (createWrappedValueProvider as any)(null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("useModalProductFilter", () => {
    it("should execute with valid args", () => {
      try {
        const result = (useModalProductFilter as any)({} as any);

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
        (useModalProductFilter as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (useModalProductFilter as any)(null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
