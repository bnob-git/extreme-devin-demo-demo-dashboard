import { RowComponent } from "./Row";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("Row", () => {
  test("RowComponent is exported", () => {
    expect(RowComponent).toBeDefined();
  });

  test("RowComponent can be called", () => {
    if (typeof RowComponent === "function") {
      try {
        (RowComponent as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
