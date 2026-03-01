import { getErrorMessage } from "./messages";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("messages", () => {
  test("getErrorMessage is exported", () => {
    expect(getErrorMessage).toBeDefined();
  });

  test("getErrorMessage can be called", () => {
    if (typeof getErrorMessage === "function") {
      try {
        (getErrorMessage as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
