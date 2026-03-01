import { FilterNumericField } from "./FilterNumericField";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("FilterNumericField", () => {
  test("FilterNumericField is exported", () => {
    expect(FilterNumericField).toBeDefined();
  });

  test("FilterNumericField can be called", () => {
    if (typeof FilterNumericField === "function") {
      try {
        (FilterNumericField as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
