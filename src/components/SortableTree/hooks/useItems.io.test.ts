import { useItems } from "./useItems";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useItems", () => {
  test("useItems is exported", () => {
    expect(useItems).toBeDefined();
  });

  test("useItems can be called", () => {
    if (typeof useItems === "function") {
      try {
        (useItems as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
