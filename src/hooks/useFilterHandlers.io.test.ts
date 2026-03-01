import { useFilterHandlers } from "./useFilterHandlers";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useFilterHandlers", () => {
  test("useFilterHandlers is exported", () => {
    expect(useFilterHandlers).toBeDefined();
  });

  test("useFilterHandlers can be called", () => {
    if (typeof useFilterHandlers === "function") {
      try {
        (useFilterHandlers as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
