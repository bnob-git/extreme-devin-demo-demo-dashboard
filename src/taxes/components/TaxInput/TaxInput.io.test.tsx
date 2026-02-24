import TaxInput from "./TaxInput";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("TaxInput", () => {
  test("default export is defined", () => {
    expect(TaxInput).toBeDefined();
  });
});
