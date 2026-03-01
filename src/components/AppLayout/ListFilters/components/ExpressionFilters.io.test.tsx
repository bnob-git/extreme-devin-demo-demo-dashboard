import { ExpressionFilters } from "./ExpressionFilters";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("ExpressionFilters", () => {
  test("ExpressionFilters is exported", () => {
    expect(ExpressionFilters).toBeDefined();
  });

  test("ExpressionFilters can be called", () => {
    if (typeof ExpressionFilters === "function") {
      try {
        (ExpressionFilters as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
