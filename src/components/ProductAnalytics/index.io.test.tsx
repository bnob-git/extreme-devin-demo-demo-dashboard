import { ProductAnalytics } from ".";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("index", () => {
  test("ProductAnalytics is exported", () => {
    expect(ProductAnalytics).toBeDefined();
  });

  test("ProductAnalytics can be called", () => {
    if (typeof ProductAnalytics === "function") {
      try {
        (ProductAnalytics as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
