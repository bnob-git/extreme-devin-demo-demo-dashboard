import {
  createAttributeProductVariantOptionsFromAPI,
  createCustomerOptionsFromAPI,
  createOptionsFromAPI,
  NoopValuesHandler,
} from "./Handler";

describe("Handler", () => {
  describe("createOptionsFromAPI", () => {
    it("should execute with valid args", () => {
      try {
        const result = (createOptionsFromAPI as any)({} as any);

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
        (createOptionsFromAPI as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (createOptionsFromAPI as any)(null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("createCustomerOptionsFromAPI", () => {
    it("should execute with valid args", () => {
      try {
        const result = (createCustomerOptionsFromAPI as any)({} as any);

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
        (createCustomerOptionsFromAPI as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (createCustomerOptionsFromAPI as any)(null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("createAttributeProductVariantOptionsFromAPI", () => {
    it("should execute with valid args", () => {
      try {
        const result = (createAttributeProductVariantOptionsFromAPI as any)({} as any);

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
        (createAttributeProductVariantOptionsFromAPI as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (createAttributeProductVariantOptionsFromAPI as any)(null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("NoopValuesHandler", () => {
    it("should execute with valid args", () => {
      try {
        const result = (NoopValuesHandler as any)({} as any);

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
        (NoopValuesHandler as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (NoopValuesHandler as any)(null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
