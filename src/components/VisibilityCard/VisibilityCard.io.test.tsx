import VisibilityCard from "./VisibilityCard";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("VisibilityCard", () => {
  test("default export is defined", () => {
    expect(VisibilityCard).toBeDefined();
  });
});
