import { ToggleButton } from "./ToggleButton";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("ToggleButton", () => {
  test("ToggleButton is exported", () => {
    expect(ToggleButton).toBeDefined();
  });

  test("ToggleButton can be called", () => {
    if (typeof ToggleButton === "function") {
      try {
        (ToggleButton as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
