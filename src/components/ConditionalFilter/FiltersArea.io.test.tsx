import { FiltersArea } from "./FiltersArea";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("FiltersArea", () => {
  test("FiltersArea is exported", () => {
    expect(FiltersArea).toBeDefined();
  });
});
