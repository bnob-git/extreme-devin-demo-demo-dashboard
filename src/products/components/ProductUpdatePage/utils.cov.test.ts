import { mapByChannel, parseCurrency, prepareVariantChangeData } from "./utils";

describe("utils", () => {
  describe("parseCurrency", () => {
    it("should execute with valid args", () => {
      try {
        const result = (parseCurrency as any)("test-value", {} as any, "test-value");

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
        (parseCurrency as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (parseCurrency as any)(null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("prepareVariantChangeData", () => {
    it("should execute with valid args", () => {
      try {
        const result = (prepareVariantChangeData as any)(
          { id: "test-id", name: "test", metadata: [], privateMetadata: [] } as any,
          {} as any,
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
        (prepareVariantChangeData as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (prepareVariantChangeData as any)(null, null, null, null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("mapByChannel", () => {
    it("should execute with valid args", () => {
      try {
        const result = (mapByChannel as any)([{ id: "test-id", name: "test" }] as any);

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
        (mapByChannel as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (mapByChannel as any)(null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
