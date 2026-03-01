import { Multiselect } from "./Multiselect";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("Multiselect", () => {
  test("Multiselect is exported", () => {
    expect(Multiselect).toBeDefined();
  });
});
