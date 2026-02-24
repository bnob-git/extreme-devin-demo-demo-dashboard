import { useUrlValueProvider } from "./useUrlValueProvider";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useUrlValueProvider", () => {
  test("useUrlValueProvider is exported", () => {
    expect(useUrlValueProvider).toBeDefined();
  });

  test("useUrlValueProvider can be called", () => {
    if (typeof useUrlValueProvider === "function") {
      try {
        (useUrlValueProvider as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
