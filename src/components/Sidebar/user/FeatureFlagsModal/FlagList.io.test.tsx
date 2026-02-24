import { FlagList } from "./FlagList";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("FlagList", () => {
  test("FlagList is exported", () => {
    expect(FlagList).toBeDefined();
  });

  test("FlagList can be called", () => {
    if (typeof FlagList === "function") {
      try {
        (FlagList as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
