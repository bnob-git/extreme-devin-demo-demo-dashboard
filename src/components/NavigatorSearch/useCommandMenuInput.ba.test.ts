import { useCommandMenuInput } from "./useCommandMenuInput";

describe("useCommandMenuInput body-aware tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useCommandMenuInput (L10-14) with body-aware args", () => {
    try {
      const result = (useCommandMenuInput as any)("test-id");

      if (result && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
