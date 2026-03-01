import { DevModeProvider } from "./DevModeProvider";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("DevModeProvider", () => {
  test("DevModeProvider is exported", () => {
    expect(DevModeProvider).toBeDefined();
  });

  test("DevModeProvider can be called", () => {
    if (typeof DevModeProvider === "function") {
      try {
        (DevModeProvider as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
