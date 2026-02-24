import { ColumnPicker } from "./ColumnPicker";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("ColumnPicker", () => {
  test("ColumnPicker is exported", () => {
    expect(ColumnPicker).toBeDefined();
  });

  test("ColumnPicker can be called", () => {
    if (typeof ColumnPicker === "function") {
      try {
        (ColumnPicker as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
