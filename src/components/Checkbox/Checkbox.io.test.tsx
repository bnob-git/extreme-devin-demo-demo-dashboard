import Checkbox from "./Checkbox";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("Checkbox", () => {
  test("default export is defined", () => {
    expect(Checkbox).toBeDefined();
  });
});
