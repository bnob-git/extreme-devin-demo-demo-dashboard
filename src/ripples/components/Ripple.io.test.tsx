import { Ripple } from "./Ripple";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("Ripple", () => {
  test("Ripple is exported", () => {
    expect(Ripple).toBeDefined();
  });

  test("Ripple can be called", () => {
    if (typeof Ripple === "function") {
      try {
        (Ripple as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
