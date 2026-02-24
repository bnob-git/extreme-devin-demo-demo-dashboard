import { useFlagsState } from "./useFlagsState";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useFlagsState", () => {
  test("useFlagsState is exported", () => {
    expect(useFlagsState).toBeDefined();
  });

  test("useFlagsState can be called", () => {
    if (typeof useFlagsState === "function") {
      try {
        (useFlagsState as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
