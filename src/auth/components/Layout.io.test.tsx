import Layout from "./Layout";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("Layout", () => {
  test("default export is defined", () => {
    expect(Layout).toBeDefined();
  });
});
