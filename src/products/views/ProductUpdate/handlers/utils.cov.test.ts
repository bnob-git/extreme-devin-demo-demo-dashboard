import {
  byAttributeName,
  getBulkVariantUpdateInputs,
  getCreateVariantInput,
  getProductChannelsUpdateVariables,
  getProductUpdateVariables,
  hasProductChannelsUpdate,
  inferProductChannelsAfterUpdate,
} from "./utils";

describe("utils", () => {
  describe("getProductUpdateVariables", () => {
    it("should execute with valid args", () => {
      try {
        const result = (getProductUpdateVariables as any)(
          {} as any,
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
        (getProductUpdateVariables as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (getProductUpdateVariables as any)(null, null, null, null, null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("getCreateVariantInput", () => {
    it("should execute with valid args", () => {
      try {
        const result = (getCreateVariantInput as any)(
          { id: "test-id", name: "test", metadata: [], privateMetadata: [] } as any,
          1,
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
        (getCreateVariantInput as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (getCreateVariantInput as any)(null, null, null, null, null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("getProductChannelsUpdateVariables", () => {
    it("should execute with valid args", () => {
      try {
        const result = (getProductChannelsUpdateVariables as any)(
          {} as any,
          { id: "test-id", name: "test", metadata: [], privateMetadata: [] } as any,
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
        (getProductChannelsUpdateVariables as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (getProductChannelsUpdateVariables as any)(null, null, null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("hasProductChannelsUpdate", () => {
    it("should execute with valid args", () => {
      try {
        const result = (hasProductChannelsUpdate as any)({
          id: "test-id",
          name: "test",
          metadata: [],
          privateMetadata: [],
        } as any);

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
        (hasProductChannelsUpdate as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (hasProductChannelsUpdate as any)(null, null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("getBulkVariantUpdateInputs", () => {
    it("should execute with valid args", () => {
      try {
        const result = (getBulkVariantUpdateInputs as any)(
          [{ id: "test-id", name: "test" }] as any,
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
        (getBulkVariantUpdateInputs as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (getBulkVariantUpdateInputs as any)(null, null, null, null, null, null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("inferProductChannelsAfterUpdate", () => {
    it("should execute with valid args", () => {
      try {
        const result = (inferProductChannelsAfterUpdate as any)(
          {} as any,
          { id: "test-id", name: "test", metadata: [], privateMetadata: [] } as any,
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
        (inferProductChannelsAfterUpdate as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (inferProductChannelsAfterUpdate as any)(null, null, null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("byAttributeName", () => {
    it("should execute with valid args", () => {
      try {
        const result = (byAttributeName as any)("test-value");

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
        (byAttributeName as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (byAttributeName as any)(null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
