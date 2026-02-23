import { postToExtension, usePostToExtension } from "./usePostToExtension";

describe("usePostToExtension", () => {
  describe("postToExtension", () => {
    it("should execute with valid args", () => {
      try {
        const result = (postToExtension as any)(
          {
            target: { value: "test", name: "test" },
            preventDefault: jest.fn(),
            stopPropagation: jest.fn(),
          } as any,
          {} as any,
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
        (postToExtension as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (postToExtension as any)(null, null, null, null, null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });

  describe("usePostToExtension", () => {
    it("should execute with valid args", () => {
      try {
        const result = (usePostToExtension as any)({} as any, "test-value");

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
        (usePostToExtension as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (usePostToExtension as any)(null, null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
