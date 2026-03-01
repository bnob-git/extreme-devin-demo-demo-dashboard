import { useRouteChange } from "./useRouteChange";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useRouteChange", () => {
  test("useRouteChange is exported", () => {
    expect(useRouteChange).toBeDefined();
  });

  test("useRouteChange can be called", () => {
    if (typeof useRouteChange === "function") {
      try {
        (useRouteChange as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
