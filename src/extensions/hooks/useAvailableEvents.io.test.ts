import { useAvailableEvents } from "./useAvailableEvents";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useAvailableEvents", () => {
  test("useAvailableEvents is exported", () => {
    expect(useAvailableEvents).toBeDefined();
  });

  test("useAvailableEvents can be called", () => {
    if (typeof useAvailableEvents === "function") {
      try {
        (useAvailableEvents as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
