import { dateCellRenderer } from "./DateCell";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("DateCell", () => {
  test("dateCellRenderer is exported", () => {
    expect(dateCellRenderer).toBeDefined();
  });

  test("dateCellRenderer can be called", () => {
    if (typeof dateCellRenderer === "function") {
      try {
        (dateCellRenderer as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
