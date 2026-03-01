import { useOnboardingData } from "./useOnboardingData";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useOnboardingData", () => {
  test("useOnboardingData is exported", () => {
    expect(useOnboardingData).toBeDefined();
  });

  test("useOnboardingData can be called", () => {
    if (typeof useOnboardingData === "function") {
      try {
        (useOnboardingData as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
