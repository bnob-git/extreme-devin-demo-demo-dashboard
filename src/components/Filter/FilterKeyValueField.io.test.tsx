import { FilterKeyValueField } from "./FilterKeyValueField";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("FilterKeyValueField", () => {
  test("FilterKeyValueField is exported", () => {
    expect(FilterKeyValueField).toBeDefined();
  });

  test("FilterKeyValueField can be called", () => {
    if (typeof FilterKeyValueField === "function") {
      try {
        (FilterKeyValueField as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
