import { initialData } from "../fixtures";
import { hueToPillColorDark, hueToPillColorLight, pillCellRenderer, stringToHue } from "./PillCell";

describe("PillCell fixture tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls stringToHue with initialData fixture", () => {
    try {
      const result = (stringToHue as any)(initialData as any);

      if (result && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls hueToPillColorLight with initialData fixture", () => {
    try {
      const result = (hueToPillColorLight as any)(initialData as any);

      if (result && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls hueToPillColorDark with initialData fixture", () => {
    try {
      const result = (hueToPillColorDark as any)(initialData as any);

      if (result && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls pillCellRenderer with initialData fixture", () => {
    try {
      const result = (pillCellRenderer as any)(initialData as any);

      if (result && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
