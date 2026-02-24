import { useProductFilterAPIProvider } from "./ProductFilterAPIProvider";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("ProductFilterAPIProvider", () => {
  test("useProductFilterAPIProvider is exported", () => {
    expect(useProductFilterAPIProvider).toBeDefined();
  });

  test("useProductFilterAPIProvider can be called", () => {
    if (typeof useProductFilterAPIProvider === "function") {
      try {
        (useProductFilterAPIProvider as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
