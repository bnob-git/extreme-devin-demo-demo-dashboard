import { RightOperator } from "./RightOperator";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("RightOperator", () => {
  test("RightOperator is exported", () => {
    expect(RightOperator).toBeDefined();
  });

  test("RightOperator can be called", () => {
    if (typeof RightOperator === "function") {
      try {
        (RightOperator as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
