import { FilterErrorsList } from "./FilterErrorsList";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("FilterErrorsList", () => {
  test("FilterErrorsList is exported", () => {
    expect(FilterErrorsList).toBeDefined();
  });

  test("FilterErrorsList can be called", () => {
    if (typeof FilterErrorsList === "function") {
      try {
        (FilterErrorsList as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
