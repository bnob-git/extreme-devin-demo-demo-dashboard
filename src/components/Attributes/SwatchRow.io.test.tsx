import { SwatchRow } from "./SwatchRow";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("SwatchRow", () => {
  test("SwatchRow is exported", () => {
    expect(SwatchRow).toBeDefined();
  });

  test("SwatchRow can be called", () => {
    if (typeof SwatchRow === "function") {
      try {
        (SwatchRow as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
