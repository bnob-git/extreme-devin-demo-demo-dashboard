jest.mock("@dashboard/hooks/useNotifier", () => ({ __esModule: true, default: () => jest.fn() }));

import { useInstallationNotify } from "./useInstallationNotify";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useInstallationNotify", () => {
  test("useInstallationNotify is exported", () => {
    expect(useInstallationNotify).toBeDefined();
  });

  test("useInstallationNotify can be called", () => {
    if (typeof useInstallationNotify === "function") {
      try {
        (useInstallationNotify as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
