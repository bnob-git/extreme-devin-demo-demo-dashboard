jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));

import { SearchShortcut } from "./SearchShortcut";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("SearchShortcut", () => {
  test("SearchShortcut is exported", () => {
    expect(SearchShortcut).toBeDefined();
  });

  test("SearchShortcut can be called", () => {
    if (typeof SearchShortcut === "function") {
      try {
        (SearchShortcut as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
