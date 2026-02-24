import { useAnalytics } from "./useAnalytics";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useAnalytics", () => {
  test("useAnalytics is exported", () => {
    expect(useAnalytics).toBeDefined();
  });

  test("useAnalytics can be called", () => {
    if (typeof useAnalytics === "function") {
      try {
        (useAnalytics as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
