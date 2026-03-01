import { ConditionalFilters } from "./ConditionalFilters";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("ConditionalFilters", () => {
  test("ConditionalFilters is exported", () => {
    expect(ConditionalFilters).toBeDefined();
  });
});
