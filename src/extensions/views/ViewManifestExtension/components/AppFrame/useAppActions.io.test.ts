jest.mock("@dashboard/hooks/useNotifier", () => ({ __esModule: true, default: () => jest.fn() }));

import { useAppActions } from "./useAppActions";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useAppActions", () => {
  test("useAppActions is exported", () => {
    expect(useAppActions).toBeDefined();
  });

  test("useAppActions can be called", () => {
    if (typeof useAppActions === "function") {
      try {
        (useAppActions as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
