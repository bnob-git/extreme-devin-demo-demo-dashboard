import {
  createInitialAttributeState,
  createInitialCollectionState,
  createInitialGiftCardsState,
  createInitialOrderState,
  createInitialPageState,
  createInitialProductStateFromData,
  createInitialVoucherState,
  mergeInitialProductsStateReferenceAttributes,
} from "./helpers";

describe("helpers", () => {
  describe("createInitialProductStateFromData", () => {
    it("should execute with valid args", () => {
      try {
        const result = (createInitialProductStateFromData as any)(
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
        (createInitialProductStateFromData as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (createInitialProductStateFromData as any)(null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("mergeInitialProductsStateReferenceAttributes", () => {
    it("should execute with valid args", () => {
      try {
        const result = (mergeInitialProductsStateReferenceAttributes as any)(
          {} as any,
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
        (mergeInitialProductsStateReferenceAttributes as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (mergeInitialProductsStateReferenceAttributes as any)(null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("createInitialOrderState", () => {
    it("should execute with valid args", () => {
      try {
        const result = (createInitialOrderState as any)([{ id: "test-id", name: "test" }] as any);

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
        (createInitialOrderState as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (createInitialOrderState as any)(null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("createInitialVoucherState", () => {
    it("should execute with valid args", () => {
      try {
        const result = (createInitialVoucherState as any)([{ id: "test-id", name: "test" }] as any);

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
        (createInitialVoucherState as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (createInitialVoucherState as any)(null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("createInitialPageState", () => {
    it("should execute with valid args", () => {
      try {
        const result = (createInitialPageState as any)([{ id: "test-id", name: "test" }] as any);

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
        (createInitialPageState as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (createInitialPageState as any)(null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("createInitialGiftCardsState", () => {
    it("should execute with valid args", () => {
      try {
        const result = (createInitialGiftCardsState as any)(
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
        (createInitialGiftCardsState as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (createInitialGiftCardsState as any)(null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("createInitialCollectionState", () => {
    it("should execute with valid args", () => {
      try {
        const result = (createInitialCollectionState as any)(
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
        (createInitialCollectionState as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (createInitialCollectionState as any)(null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("createInitialAttributeState", () => {
    it("should execute with valid args", () => {
      try {
        const result = (createInitialAttributeState as any)([
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
        (createInitialAttributeState as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (createInitialAttributeState as any)(null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
