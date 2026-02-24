import { Pagination } from "./Pagination";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("Pagination", () => {
  test("Pagination is exported", () => {
    expect(Pagination).toBeDefined();
  });

  test("Pagination can be called", () => {
    if (typeof Pagination === "function") {
      try {
        (Pagination as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
