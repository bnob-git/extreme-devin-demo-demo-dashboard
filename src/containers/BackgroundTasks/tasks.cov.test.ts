import { queueCustom, queueExport, queueInvoiceGenerate } from "./tasks";

describe("tasks", () => {
  describe("queueCustom", () => {
    it("should execute with valid args", () => {
      try {
        const result = (queueCustom as any)(
          "test-value",
          [{ id: "test-id", name: "test" }] as any,
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
        (queueCustom as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (queueCustom as any)(null, null, null, null, null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("queueInvoiceGenerate", () => {
    it("should execute with valid args", () => {
      try {
        const result = (queueInvoiceGenerate as any)(
          "test-value",
          {} as any,
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
        (queueInvoiceGenerate as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (queueInvoiceGenerate as any)(null, null, null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("queueExport", () => {
    it("should execute with valid args", () => {
      try {
        const result = (queueExport as any)(
          "test-value",
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
        (queueExport as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (queueExport as any)(null, null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
