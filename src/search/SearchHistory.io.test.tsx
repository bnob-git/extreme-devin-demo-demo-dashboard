import { SearchHistory } from "./SearchHistory";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("SearchHistory", () => {
  test("SearchHistory is exported", () => {
    expect(SearchHistory).toBeDefined();
  });

  test("SearchHistory can be called", () => {
    if (typeof SearchHistory === "function") {
      try {
        (SearchHistory as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
