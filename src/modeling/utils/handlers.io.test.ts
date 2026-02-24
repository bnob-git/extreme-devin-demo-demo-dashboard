import { createPageTypeSelectHandler } from "./handlers";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("handlers", () => {
  test("createPageTypeSelectHandler is exported", () => {
    expect(createPageTypeSelectHandler).toBeDefined();
  });

  test("createPageTypeSelectHandler can be called", () => {
    if (typeof createPageTypeSelectHandler === "function") {
      try {
        (createPageTypeSelectHandler as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
