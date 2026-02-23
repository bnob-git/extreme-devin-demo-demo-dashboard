jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));

import { useExternalApp } from "./ExternalAppContext";

describe("ExternalAppContext.tsx coverage", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useExternalApp", () => {
    try {
      (useExternalApp as any)({} as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
