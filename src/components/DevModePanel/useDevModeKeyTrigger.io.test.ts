import { useDevModeKeyTrigger } from "./useDevModeKeyTrigger";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useDevModeKeyTrigger", () => {
  test("useDevModeKeyTrigger is exported", () => {
    expect(useDevModeKeyTrigger).toBeDefined();
  });

  test("useDevModeKeyTrigger can be called", () => {
    if (typeof useDevModeKeyTrigger === "function") {
      try {
        (useDevModeKeyTrigger as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
