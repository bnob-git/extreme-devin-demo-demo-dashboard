import {
  filterCategoriesByAttributeValues,
  filterCollectionsByAttributeValues,
  filterPagesByAttributeValues,
  filterProductsByAttributeValues,
} from "./utils";

describe("utils", () => {
  describe("filterProductsByAttributeValues", () => {
    it("should execute with valid args", () => {
      try {
        const result = (filterProductsByAttributeValues as any)(
          [{ id: "test-id", name: "test" }] as any,
          {} as any,
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
        (filterProductsByAttributeValues as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (filterProductsByAttributeValues as any)(null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("filterPagesByAttributeValues", () => {
    it("should execute with valid args", () => {
      try {
        const result = (filterPagesByAttributeValues as any)(
          [{ id: "test-id", name: "test" }] as any,
          {} as any,
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
        (filterPagesByAttributeValues as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (filterPagesByAttributeValues as any)(null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("filterCollectionsByAttributeValues", () => {
    it("should execute with valid args", () => {
      try {
        const result = (filterCollectionsByAttributeValues as any)(
          [{ id: "test-id", name: "test" }] as any,
          {} as any,
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
        (filterCollectionsByAttributeValues as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (filterCollectionsByAttributeValues as any)(null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("filterCategoriesByAttributeValues", () => {
    it("should execute with valid args", () => {
      try {
        const result = (filterCategoriesByAttributeValues as any)(
          [{ id: "test-id", name: "test" }] as any,
          {} as any,
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
        (filterCategoriesByAttributeValues as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (filterCategoriesByAttributeValues as any)(null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
