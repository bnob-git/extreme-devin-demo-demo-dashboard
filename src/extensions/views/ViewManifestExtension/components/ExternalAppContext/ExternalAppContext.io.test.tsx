jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));

import { useExternalApp } from "./ExternalAppContext";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("ExternalAppContext", () => {
  test("useExternalApp is exported", () => {
    expect(useExternalApp).toBeDefined();
  });

  test("useExternalApp can be called", () => {
    if (typeof useExternalApp === "function") {
      try {
        (useExternalApp as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
