import { ModalFilters } from "./ModalFilters";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("ModalFilters", () => {
  test("ModalFilters is exported", () => {
    expect(ModalFilters).toBeDefined();
  });
});
