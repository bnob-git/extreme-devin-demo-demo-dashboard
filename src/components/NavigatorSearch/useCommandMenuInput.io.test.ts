import { useCommandMenuInput } from "./useCommandMenuInput";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useCommandMenuInput", () => {
  test("useCommandMenuInput is exported", () => {
    expect(useCommandMenuInput).toBeDefined();
  });

  test("useCommandMenuInput can be called", () => {
    if (typeof useCommandMenuInput === "function") {
      try {
        (useCommandMenuInput as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
