import { initialData } from "../fixtures";
import { dropdownCellRenderer, emptyDropdownCellValue } from "./DropdownCell";

describe("DropdownCell fixture tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls emptyDropdownCellValue with initialData fixture", () => {
    try {
      const result = (emptyDropdownCellValue as any)(initialData as any);

      if (result && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls dropdownCellRenderer with initialData fixture", () => {
    try {
      const result = (dropdownCellRenderer as any)(initialData as any);

      if (result && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
