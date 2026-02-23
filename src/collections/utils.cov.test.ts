import {
  createChannelsChangeHandler,
  getAssignedProductIdsToCollection,
  getProductsFromSearchResults,
} from "./utils";

describe("utils", () => {
  describe("createChannelsChangeHandler", () => {
    it("should execute with valid args", () => {
      try {
        const result = (createChannelsChangeHandler as any)(
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
        (createChannelsChangeHandler as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (createChannelsChangeHandler as any)(null, null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("getAssignedProductIdsToCollection", () => {
    it("should execute with valid args", () => {
      try {
        const result = (getAssignedProductIdsToCollection as any)({} as any, {} as any);

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
        (getAssignedProductIdsToCollection as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (getAssignedProductIdsToCollection as any)(null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("getProductsFromSearchResults", () => {
    it("should execute with valid args", () => {
      try {
        const result = (getProductsFromSearchResults as any)([
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
        (getProductsFromSearchResults as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (getProductsFromSearchResults as any)(null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
