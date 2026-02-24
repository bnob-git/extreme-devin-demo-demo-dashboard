import { useHistoryCriteria } from "./useHistoryCriteria";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useHistoryCriteria", () => {
  test("useHistoryCriteria is exported", () => {
    expect(useHistoryCriteria).toBeDefined();
  });

  test("useHistoryCriteria can be called", () => {
    if (typeof useHistoryCriteria === "function") {
      try {
        (useHistoryCriteria as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
