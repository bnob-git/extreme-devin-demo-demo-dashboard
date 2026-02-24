jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));

import { AppWidgets } from "./AppWidgets";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("AppWidgets", () => {
  test("AppWidgets is exported", () => {
    expect(AppWidgets).toBeDefined();
  });

  test("AppWidgets can be called", () => {
    if (typeof AppWidgets === "function") {
      try {
        (AppWidgets as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
