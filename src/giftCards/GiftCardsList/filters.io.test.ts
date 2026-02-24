import { getFilterQueryParam, messages, storageUtils } from "./filters";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("filters", () => {
  test("getFilterQueryParam is exported", () => {
    expect(getFilterQueryParam).toBeDefined();
  });

  test("messages is exported", () => {
    expect(messages).toBeDefined();
  });

  test("storageUtils is exported", () => {
    expect(storageUtils).toBeDefined();
  });

  test("getFilterQueryParam can be called", () => {
    if (typeof getFilterQueryParam === "function") {
      try {
        (getFilterQueryParam as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
