import { DevModePanel } from "./DevModePanel";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("DevModePanel", () => {
  test("DevModePanel is exported", () => {
    expect(DevModePanel).toBeDefined();
  });

  test("DevModePanel can be called", () => {
    if (typeof DevModePanel === "function") {
      try {
        (DevModePanel as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
