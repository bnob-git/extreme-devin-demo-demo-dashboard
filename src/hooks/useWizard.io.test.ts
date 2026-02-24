import useWizard from "./useWizard";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useWizard", () => {
  test("default export is defined", () => {
    expect(useWizard).toBeDefined();
  });
});
