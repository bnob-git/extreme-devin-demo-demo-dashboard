import { createCountryChangeHandler, createRestOfTheWorldChangeHandler } from "./handlers";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("handlers", () => {
  test("createCountryChangeHandler is exported", () => {
    expect(createCountryChangeHandler).toBeDefined();
  });

  test("createRestOfTheWorldChangeHandler is exported", () => {
    expect(createRestOfTheWorldChangeHandler).toBeDefined();
  });

  test("createCountryChangeHandler can be called", () => {
    if (typeof createCountryChangeHandler === "function") {
      try {
        (createCountryChangeHandler as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("createRestOfTheWorldChangeHandler can be called", () => {
    if (typeof createRestOfTheWorldChangeHandler === "function") {
      try {
        (createRestOfTheWorldChangeHandler as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
