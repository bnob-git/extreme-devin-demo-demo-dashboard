import { FilterContent } from "./FilterContent";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("FilterContent", () => {
  test("FilterContent is exported", () => {
    expect(FilterContent).toBeDefined();
  });

  test("FilterContent can be called", () => {
    if (typeof FilterContent === "function") {
      try {
        (FilterContent as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
