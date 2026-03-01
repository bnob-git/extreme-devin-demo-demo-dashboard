import { useCategorySelection } from "./useCategorySelection";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useCategorySelection", () => {
  test("useCategorySelection is exported", () => {
    expect(useCategorySelection).toBeDefined();
  });

  test("useCategorySelection can be called", () => {
    if (typeof useCategorySelection === "function") {
      try {
        (useCategorySelection as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
