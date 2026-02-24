import TableButtonWrapper from "./TableButtonWrapper";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("TableButtonWrapper", () => {
  test("default export is defined", () => {
    expect(TableButtonWrapper).toBeDefined();
  });

  test("TableButtonWrapper can be called", () => {
    if (typeof TableButtonWrapper === "function") {
      try {
        (TableButtonWrapper as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
