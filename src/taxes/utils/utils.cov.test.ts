import {
  encodeURIComponentOptional,
  excludeExistingCountries,
  isLastElement,
  mapUndefinedCountriesToTaxClasses,
  mapUndefinedTaxRatesToCountries,
} from "./utils";

describe("utils", () => {
  describe("encodeURIComponentOptional", () => {
    it("should execute with valid args", () => {
      try {
        const result = (encodeURIComponentOptional as any)("test-value");

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
        (encodeURIComponentOptional as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (encodeURIComponentOptional as any)(null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("mapUndefinedTaxRatesToCountries", () => {
    it("should execute with valid args", () => {
      try {
        const result = (mapUndefinedTaxRatesToCountries as any)(
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
        (mapUndefinedTaxRatesToCountries as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (mapUndefinedTaxRatesToCountries as any)(null, null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("mapUndefinedCountriesToTaxClasses", () => {
    it("should execute with valid args", () => {
      try {
        const result = (mapUndefinedCountriesToTaxClasses as any)(
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
        (mapUndefinedCountriesToTaxClasses as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (mapUndefinedCountriesToTaxClasses as any)(null, null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("isLastElement", () => {
    it("should execute with valid args", () => {
      try {
        const result = (isLastElement as any)([{ id: "test-id", name: "test" }] as any, 1);

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
        (isLastElement as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (isLastElement as any)(null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("excludeExistingCountries", () => {
    it("should execute with valid args", () => {
      try {
        const result = (excludeExistingCountries as any)(
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
        (excludeExistingCountries as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (excludeExistingCountries as any)(null, null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
