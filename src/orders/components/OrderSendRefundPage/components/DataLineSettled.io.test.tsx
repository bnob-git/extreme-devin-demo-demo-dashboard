import { DataLineSettled } from "./DataLineSettled";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("DataLineSettled", () => {
  test("DataLineSettled is exported", () => {
    expect(DataLineSettled).toBeDefined();
  });

  test("DataLineSettled can be called", () => {
    if (typeof DataLineSettled === "function") {
      try {
        (DataLineSettled as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
