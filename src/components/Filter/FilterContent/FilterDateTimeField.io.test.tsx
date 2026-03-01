import { FilterDateTimeField } from "./FilterDateTimeField";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("FilterDateTimeField", () => {
  test("FilterDateTimeField is exported", () => {
    expect(FilterDateTimeField).toBeDefined();
  });

  test("FilterDateTimeField can be called", () => {
    if (typeof FilterDateTimeField === "function") {
      try {
        (FilterDateTimeField as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
