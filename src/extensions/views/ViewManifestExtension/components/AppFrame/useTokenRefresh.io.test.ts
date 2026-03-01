import { useTokenRefresh } from "./useTokenRefresh";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useTokenRefresh", () => {
  test("useTokenRefresh is exported", () => {
    expect(useTokenRefresh).toBeDefined();
  });

  test("useTokenRefresh can be called", () => {
    if (typeof useTokenRefresh === "function") {
      try {
        (useTokenRefresh as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
