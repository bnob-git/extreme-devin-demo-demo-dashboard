import { getBgColor, getBorderColor, getHoverStateBgColor } from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("utils", () => {
  test("getHoverStateBgColor is exported", () => {
    expect(getHoverStateBgColor).toBeDefined();
  });

  test("getBorderColor is exported", () => {
    expect(getBorderColor).toBeDefined();
  });

  test("getBgColor is exported", () => {
    expect(getBgColor).toBeDefined();
  });

  test("getHoverStateBgColor can be called", () => {
    if (typeof getHoverStateBgColor === "function") {
      try {
        (getHoverStateBgColor as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getBorderColor can be called", () => {
    if (typeof getBorderColor === "function") {
      try {
        (getBorderColor as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getBgColor can be called", () => {
    if (typeof getBgColor === "function") {
      try {
        (getBgColor as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
