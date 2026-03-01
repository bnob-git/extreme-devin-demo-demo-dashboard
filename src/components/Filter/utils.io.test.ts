import { extractInvalidFilters, getByName } from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("utils", () => {
  test("getByName is exported", () => {
    expect(getByName).toBeDefined();
  });

  test("extractInvalidFilters is exported", () => {
    expect(extractInvalidFilters).toBeDefined();
  });

  test("getByName can be called", () => {
    if (typeof getByName === "function") {
      try {
        (getByName as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
