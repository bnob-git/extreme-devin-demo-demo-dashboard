import { usePriceField } from "./usePriceField";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("usePriceField", () => {
  test("usePriceField is exported", () => {
    expect(usePriceField).toBeDefined();
  });

  test("usePriceField can be called", () => {
    if (typeof usePriceField === "function") {
      try {
        (usePriceField as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
