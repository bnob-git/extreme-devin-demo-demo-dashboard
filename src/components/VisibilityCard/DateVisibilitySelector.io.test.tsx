import DateVisibilitySelector from "./DateVisibilitySelector";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("DateVisibilitySelector", () => {
  test("default export is defined", () => {
    expect(DateVisibilitySelector).toBeDefined();
  });
});
