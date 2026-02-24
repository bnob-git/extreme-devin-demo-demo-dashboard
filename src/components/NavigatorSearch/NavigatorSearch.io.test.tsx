import NavigatorSearch from "./NavigatorSearch";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("NavigatorSearch", () => {
  test("default export is defined", () => {
    expect(NavigatorSearch).toBeDefined();
  });
});
