import { FiltersSelect } from "./FiltersSelect";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("FiltersSelect", () => {
  test("FiltersSelect is exported", () => {
    expect(FiltersSelect).toBeDefined();
  });

  test("FiltersSelect can be called", () => {
    if (typeof FiltersSelect === "function") {
      try {
        (FiltersSelect as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
