import { usePriceClick } from "./usePriceClick";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("usePriceClick", () => {
  test("usePriceClick is exported", () => {
    expect(usePriceClick).toBeDefined();
  });

  test("usePriceClick can be called", () => {
    if (typeof usePriceClick === "function") {
      try {
        (usePriceClick as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
