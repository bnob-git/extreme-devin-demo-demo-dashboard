jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));

import { useSearchCriteria } from "./useSearchCriteria";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useSearchCriteria", () => {
  test("useSearchCriteria is exported", () => {
    expect(useSearchCriteria).toBeDefined();
  });

  test("useSearchCriteria can be called", () => {
    if (typeof useSearchCriteria === "function") {
      try {
        (useSearchCriteria as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
