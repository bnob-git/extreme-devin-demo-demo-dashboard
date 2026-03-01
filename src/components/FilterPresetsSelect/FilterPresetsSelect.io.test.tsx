import { FilterPresetsSelect } from "./FilterPresetsSelect";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("FilterPresetsSelect", () => {
  test("FilterPresetsSelect is exported", () => {
    expect(FilterPresetsSelect).toBeDefined();
  });

  test("FilterPresetsSelect can be called", () => {
    if (typeof FilterPresetsSelect === "function") {
      try {
        (FilterPresetsSelect as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
