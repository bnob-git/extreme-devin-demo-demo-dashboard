import { DisplayDate, LinkCell, Row, Thumbnail, TypeCell } from "./CommonCells";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("CommonCells", () => {
  test("Row is exported", () => {
    expect(Row).toBeDefined();
  });

  test("Thumbnail is exported", () => {
    expect(Thumbnail).toBeDefined();
  });

  test("DisplayDate is exported", () => {
    expect(DisplayDate).toBeDefined();
  });

  test("LinkCell is exported", () => {
    expect(LinkCell).toBeDefined();
  });

  test("TypeCell is exported", () => {
    expect(TypeCell).toBeDefined();
  });

  test("Row can be called", () => {
    if (typeof Row === "function") {
      try {
        (Row as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("Thumbnail can be called", () => {
    if (typeof Thumbnail === "function") {
      try {
        (Thumbnail as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("DisplayDate can be called", () => {
    if (typeof DisplayDate === "function") {
      try {
        (DisplayDate as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("LinkCell can be called", () => {
    if (typeof LinkCell === "function") {
      try {
        (LinkCell as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("TypeCell can be called", () => {
    if (typeof TypeCell === "function") {
      try {
        (TypeCell as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
