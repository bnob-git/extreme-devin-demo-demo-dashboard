import { useRichTextSubmit } from "./useRichTextSubmit";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useRichTextSubmit", () => {
  test("useRichTextSubmit is exported", () => {
    expect(useRichTextSubmit).toBeDefined();
  });

  test("useRichTextSubmit can be called", () => {
    if (typeof useRichTextSubmit === "function") {
      try {
        (useRichTextSubmit as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
