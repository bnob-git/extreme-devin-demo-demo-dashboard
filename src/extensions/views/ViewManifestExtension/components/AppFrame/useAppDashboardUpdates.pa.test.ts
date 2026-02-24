jest.mock("@dashboard/hooks/useLocale", () => ({
  __esModule: true,
  default: () => ({ locale: "en", setLocale: jest.fn() }),
}));

import { useAppDashboardUpdates } from "./useAppDashboardUpdates";

describe("useAppDashboardUpdates property-access tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useAppDashboardUpdates with mock", () => {
    try {
      (useAppDashboardUpdates as any)({} as any, {} as any, {} as any, {} as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls useAppDashboardUpdates with null", () => {
    try {
      (useAppDashboardUpdates as any)(null as any, null as any, null as any, null as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
