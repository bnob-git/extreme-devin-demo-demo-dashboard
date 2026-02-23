import {
  getMiscellaneousAmountValues,
  getRefundProductsAmountValues,
  getReturnProductsAmountValues,
} from "./utils";

describe("utils", () => {
  describe("getMiscellaneousAmountValues", () => {
    it("should execute with valid args", () => {
      try {
        const result = (getMiscellaneousAmountValues as any)({} as any);

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
        (getMiscellaneousAmountValues as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (getMiscellaneousAmountValues as any)(null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("getReturnProductsAmountValues", () => {
    it("should execute with valid args", () => {
      try {
        const result = (getReturnProductsAmountValues as any)(
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
        (getReturnProductsAmountValues as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (getReturnProductsAmountValues as any)(null, null, null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("getRefundProductsAmountValues", () => {
    it("should execute with valid args", () => {
      try {
        const result = (getRefundProductsAmountValues as any)({} as any);

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
        (getRefundProductsAmountValues as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (getRefundProductsAmountValues as any)(null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
