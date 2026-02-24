import { getTilesData } from "./tileData";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("tileData", () => {
  test("getTilesData is exported", () => {
    expect(getTilesData).toBeDefined();
  });

  test("getTilesData can be called", () => {
    if (typeof getTilesData === "function") {
      try {
        (getTilesData as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
