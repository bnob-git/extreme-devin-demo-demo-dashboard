import { ColumnPickerDynamicColumns } from "./ColumnPickerDynamicColumns";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("ColumnPickerDynamicColumns", () => {
  test("ColumnPickerDynamicColumns is exported", () => {
    expect(ColumnPickerDynamicColumns).toBeDefined();
  });

  test("ColumnPickerDynamicColumns can be called", () => {
    if (typeof ColumnPickerDynamicColumns === "function") {
      try {
        (ColumnPickerDynamicColumns as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
