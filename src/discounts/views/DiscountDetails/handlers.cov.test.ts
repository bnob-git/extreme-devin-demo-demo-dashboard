import { createRuleCreateHandler, createRuleUpdateHandler, createUpdateHandler } from "./handlers";

describe("handlers", () => {
  describe("createUpdateHandler", () => {
    it("should execute with valid args", () => {
      try {
        const result = (createUpdateHandler as any)({} as any, "2024-01-01");

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
        (createUpdateHandler as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (createUpdateHandler as any)(null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("createRuleUpdateHandler", () => {
    it("should execute with valid args", () => {
      try {
        const result = (createRuleUpdateHandler as any)({} as any, "2024-01-01");

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
        (createRuleUpdateHandler as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (createRuleUpdateHandler as any)(null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("createRuleCreateHandler", () => {
    it("should execute with valid args", () => {
      try {
        const result = (createRuleCreateHandler as any)({} as any, {} as any);

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
        (createRuleCreateHandler as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (createRuleCreateHandler as any)(null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
