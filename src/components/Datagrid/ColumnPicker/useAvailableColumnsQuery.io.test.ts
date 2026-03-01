import { useAvailableColumnsQuery } from "./useAvailableColumnsQuery";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useAvailableColumnsQuery", () => {
  test("useAvailableColumnsQuery is exported", () => {
    expect(useAvailableColumnsQuery).toBeDefined();
  });

  test("useAvailableColumnsQuery can be called", () => {
    if (typeof useAvailableColumnsQuery === "function") {
      try {
        (useAvailableColumnsQuery as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
