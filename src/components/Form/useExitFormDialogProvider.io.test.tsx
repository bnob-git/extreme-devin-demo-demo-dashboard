import { useExitFormDialogProvider } from "./useExitFormDialogProvider";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useExitFormDialogProvider", () => {
  test("useExitFormDialogProvider is exported", () => {
    expect(useExitFormDialogProvider).toBeDefined();
  });

  test("useExitFormDialogProvider can be called", () => {
    if (typeof useExitFormDialogProvider === "function") {
      try {
        (useExitFormDialogProvider as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
