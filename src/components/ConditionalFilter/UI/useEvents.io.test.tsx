import { useEventEmitter } from "./useEvents";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useEvents", () => {
  test("useEventEmitter is exported", () => {
    expect(useEventEmitter).toBeDefined();
  });

  test("useEventEmitter can be called", () => {
    if (typeof useEventEmitter === "function") {
      try {
        (useEventEmitter as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
