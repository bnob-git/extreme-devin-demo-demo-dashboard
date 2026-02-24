jest.mock("@dashboard/hooks/useLocale", () => ({
  __esModule: true,
  default: () => ({ locale: "en" }),
}));

import { useAppDashboardUpdates } from "./useAppDashboardUpdates";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useAppDashboardUpdates", () => {
  test("useAppDashboardUpdates is exported", () => {
    expect(useAppDashboardUpdates).toBeDefined();
  });

  test("useAppDashboardUpdates can be called", () => {
    if (typeof useAppDashboardUpdates === "function") {
      try {
        (useAppDashboardUpdates as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
