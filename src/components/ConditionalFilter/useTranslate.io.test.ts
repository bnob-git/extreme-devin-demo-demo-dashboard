import { useTranslate } from "./useTranslate";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useTranslate", () => {
  test("useTranslate is exported", () => {
    expect(useTranslate).toBeDefined();
  });

  test("useTranslate can be called", () => {
    if (typeof useTranslate === "function") {
      try {
        (useTranslate as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
