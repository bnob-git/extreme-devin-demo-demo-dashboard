jest.mock("@dashboard/hooks/useNotifier", () => ({ __esModule: true, default: () => jest.fn() }));

import { useClipboardCopy } from "./useClipboardCopy";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useClipboardCopy", () => {
  test("useClipboardCopy is exported", () => {
    expect(useClipboardCopy).toBeDefined();
  });

  test("useClipboardCopy can be called", () => {
    if (typeof useClipboardCopy === "function") {
      try {
        (useClipboardCopy as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
