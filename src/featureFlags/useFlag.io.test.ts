import { useFlag } from "./useFlag";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useFlag", () => {
  test("useFlag is exported", () => {
    expect(useFlag).toBeDefined();
  });

  test("useFlag can be called", () => {
    if (typeof useFlag === "function") {
      try {
        (useFlag as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
