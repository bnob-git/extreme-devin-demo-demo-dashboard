import useSearchQuery from "./useSearchQuery";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useSearchQuery", () => {
  test("default export is defined", () => {
    expect(useSearchQuery).toBeDefined();
  });
});
