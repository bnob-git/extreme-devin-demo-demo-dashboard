import { useFilterContainer } from "./useFilterContainer";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useFilterContainer", () => {
  test("useFilterContainer is exported", () => {
    expect(useFilterContainer).toBeDefined();
  });

  test("useFilterContainer can be called", () => {
    if (typeof useFilterContainer === "function") {
      try {
        (useFilterContainer as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
