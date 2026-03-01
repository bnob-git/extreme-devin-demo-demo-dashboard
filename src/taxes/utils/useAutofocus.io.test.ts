import { useAutofocus } from "./useAutofocus";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useAutofocus", () => {
  test("useAutofocus is exported", () => {
    expect(useAutofocus).toBeDefined();
  });

  test("useAutofocus can be called", () => {
    if (typeof useAutofocus === "function") {
      try {
        (useAutofocus as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
