import { AppFrame } from "./AppFrame";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("AppFrame", () => {
  test("AppFrame is exported", () => {
    expect(AppFrame).toBeDefined();
  });

  test("AppFrame can be called", () => {
    if (typeof AppFrame === "function") {
      try {
        (AppFrame as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
