import useBulkActions from "./useBulkActions";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useBulkActions", () => {
  test("default export is defined", () => {
    expect(useBulkActions).toBeDefined();
  });
});
