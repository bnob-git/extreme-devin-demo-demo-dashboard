import useListActions from "./useListActions";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useListActions", () => {
  test("default export is defined", () => {
    expect(useListActions).toBeDefined();
  });
});
