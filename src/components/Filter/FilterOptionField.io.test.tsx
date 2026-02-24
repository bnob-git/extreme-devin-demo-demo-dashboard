import FilterOptionField from "./FilterOptionField";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("FilterOptionField", () => {
  test("default export is defined", () => {
    expect(FilterOptionField).toBeDefined();
  });
});
