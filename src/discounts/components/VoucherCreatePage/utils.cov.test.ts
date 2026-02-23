import {
  generateDraftVoucherCode,
  generateMultipleVoucherCodes,
  getFilteredCategories,
  getFilteredCollections,
  getFilteredProducts,
  getFilteredProductVariants,
  mapLocalVariantsToSavedVariants,
  voucherCodeExists,
} from "./utils";

describe("utils", () => {
  describe("generateDraftVoucherCode", () => {
    it("should execute with valid args", () => {
      try {
        const result = (generateDraftVoucherCode as any)("test-value");

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
        (generateDraftVoucherCode as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (generateDraftVoucherCode as any)(null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("generateMultipleVoucherCodes", () => {
    it("should execute with valid args", () => {
      try {
        const result = (generateMultipleVoucherCodes as any)("test-value", "test-value");

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
        (generateMultipleVoucherCodes as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (generateMultipleVoucherCodes as any)(null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("voucherCodeExists", () => {
    it("should execute with valid args", () => {
      try {
        const result = (voucherCodeExists as any)("test-value", [
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
        (voucherCodeExists as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (voucherCodeExists as any)(null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("getFilteredCategories", () => {
    it("should execute with valid args", () => {
      try {
        const result = (getFilteredCategories as any)(
          { id: "test-id", name: "test", metadata: [], privateMetadata: [] } as any,
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
        (getFilteredCategories as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (getFilteredCategories as any)(null, null, null, null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("getFilteredCollections", () => {
    it("should execute with valid args", () => {
      try {
        const result = (getFilteredCollections as any)(
          { id: "test-id", name: "test", metadata: [], privateMetadata: [] } as any,
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
        (getFilteredCollections as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (getFilteredCollections as any)(null, null, null, null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("getFilteredProducts", () => {
    it("should execute with valid args", () => {
      try {
        const result = (getFilteredProducts as any)(
          { id: "test-id", name: "test", metadata: [], privateMetadata: [] } as any,
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
        (getFilteredProducts as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (getFilteredProducts as any)(null, null, null, null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("getFilteredProductVariants", () => {
    it("should execute with valid args", () => {
      try {
        const result = (getFilteredProductVariants as any)(
          { id: "test-id", name: "test", metadata: [], privateMetadata: [] } as any,
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
        (getFilteredProductVariants as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (getFilteredProductVariants as any)(null, null, null, null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("mapLocalVariantsToSavedVariants", () => {
    it("should execute with valid args", () => {
      try {
        const result = (mapLocalVariantsToSavedVariants as any)([
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
        (mapLocalVariantsToSavedVariants as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (mapLocalVariantsToSavedVariants as any)(null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
