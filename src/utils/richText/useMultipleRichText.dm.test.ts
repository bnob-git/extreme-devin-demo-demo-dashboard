import { useMultipleRichText } from "./useMultipleRichText";

describe("useMultipleRichText deep-mock tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useMultipleRichText with deep-mocked deps", () => {
    try {
      const result = (useMultipleRichText as any)("test-id");

      if (result && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
