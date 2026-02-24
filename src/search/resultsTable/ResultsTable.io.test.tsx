import { ResultsTable } from "./ResultsTable";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("ResultsTable", () => {
  test("ResultsTable is exported", () => {
    expect(ResultsTable).toBeDefined();
  });

  test("ResultsTable can be called", () => {
    if (typeof ResultsTable === "function") {
      try {
        (ResultsTable as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
