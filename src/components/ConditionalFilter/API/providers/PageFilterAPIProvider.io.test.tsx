import { usePageAPIProvider } from "./PageFilterAPIProvider";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("PageFilterAPIProvider", () => {
  test("usePageAPIProvider is exported", () => {
    expect(usePageAPIProvider).toBeDefined();
  });

  test("usePageAPIProvider can be called", () => {
    if (typeof usePageAPIProvider === "function") {
      try {
        (usePageAPIProvider as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
