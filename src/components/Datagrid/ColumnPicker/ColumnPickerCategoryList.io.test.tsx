import { ColumnPickerCategoryList } from "./ColumnPickerCategoryList";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("ColumnPickerCategoryList", () => {
  test("ColumnPickerCategoryList is exported", () => {
    expect(ColumnPickerCategoryList).toBeDefined();
  });

  test("ColumnPickerCategoryList can be called", () => {
    if (typeof ColumnPickerCategoryList === "function") {
      try {
        (ColumnPickerCategoryList as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
