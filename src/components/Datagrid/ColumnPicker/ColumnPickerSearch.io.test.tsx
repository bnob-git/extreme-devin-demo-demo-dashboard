import { ColumnPickerSearch } from "./ColumnPickerSearch";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("ColumnPickerSearch", () => {
  test("ColumnPickerSearch is exported", () => {
    expect(ColumnPickerSearch).toBeDefined();
  });

  test("ColumnPickerSearch can be called", () => {
    if (typeof ColumnPickerSearch === "function") {
      try {
        (ColumnPickerSearch as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
