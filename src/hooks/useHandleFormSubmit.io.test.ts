import useHandleFormSubmit from "./useHandleFormSubmit";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useHandleFormSubmit", () => {
  test("default export is defined", () => {
    expect(useHandleFormSubmit).toBeDefined();
  });
});
