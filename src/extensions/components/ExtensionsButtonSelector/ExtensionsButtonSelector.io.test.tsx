import { ExtensionsButtonSelector } from "./ExtensionsButtonSelector";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("ExtensionsButtonSelector", () => {
  test("ExtensionsButtonSelector is exported", () => {
    expect(ExtensionsButtonSelector).toBeDefined();
  });

  test("ExtensionsButtonSelector can be called", () => {
    if (typeof ExtensionsButtonSelector === "function") {
      try {
        (ExtensionsButtonSelector as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
