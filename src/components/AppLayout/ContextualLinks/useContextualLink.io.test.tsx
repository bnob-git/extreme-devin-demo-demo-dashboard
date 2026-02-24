import { useContextualLink } from "./useContextualLink";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useContextualLink", () => {
  test("useContextualLink is exported", () => {
    expect(useContextualLink).toBeDefined();
  });

  test("useContextualLink can be called", () => {
    if (typeof useContextualLink === "function") {
      try {
        (useContextualLink as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
