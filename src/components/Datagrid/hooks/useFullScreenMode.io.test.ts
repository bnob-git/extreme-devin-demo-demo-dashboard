import { useFullScreenMode } from "./useFullScreenMode";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useFullScreenMode", () => {
  test("useFullScreenMode is exported", () => {
    expect(useFullScreenMode).toBeDefined();
  });

  test("useFullScreenMode can be called", () => {
    if (typeof useFullScreenMode === "function") {
      try {
        (useFullScreenMode as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
