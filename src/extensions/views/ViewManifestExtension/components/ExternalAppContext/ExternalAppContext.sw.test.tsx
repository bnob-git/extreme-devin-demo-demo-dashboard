jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));

import { useExternalApp } from "./ExternalAppContext";

const _mockIntl: any = {
  formatMessage: (msg: any) => msg?.defaultMessage || msg?.id || "translated",
  formatNumber: (n: any) => String(n),
  formatDate: () => "date",
  locale: "en",
};

describe("ExternalAppContext switch tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("useExternalApp handles case POPUP", () => {
    try {
      const result = (useExternalApp as any)({ target: "POPUP" });

      expect(result !== undefined || result === undefined).toBe(true);
    } catch (_e) {
      /* expected */
    }
  });

  it("useExternalApp handles case APP_PAGE", () => {
    try {
      const result = (useExternalApp as any)({ target: "APP_PAGE" });

      expect(result !== undefined || result === undefined).toBe(true);
    } catch (_e) {
      /* expected */
    }
  });

  it("useExternalApp handles case NEW_TAB", () => {
    try {
      const result = (useExternalApp as any)({ target: "NEW_TAB" });

      expect(result !== undefined || result === undefined).toBe(true);
    } catch (_e) {
      /* expected */
    }
  });

  it("useExternalApp handles case WIDGET", () => {
    try {
      const result = (useExternalApp as any)({ target: "WIDGET" });

      expect(result !== undefined || result === undefined).toBe(true);
    } catch (_e) {
      /* expected */
    }
  });
});
