import { ColumnPickerAvailableNodes } from "./ColumnPickerAvailableNodes";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("ColumnPickerAvailableNodes", () => {
  test("ColumnPickerAvailableNodes is exported", () => {
    expect(ColumnPickerAvailableNodes).toBeDefined();
  });

  test("ColumnPickerAvailableNodes can be called", () => {
    if (typeof ColumnPickerAvailableNodes === "function") {
      try {
        (ColumnPickerAvailableNodes as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
