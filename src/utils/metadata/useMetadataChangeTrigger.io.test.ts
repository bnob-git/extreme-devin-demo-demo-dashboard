import useMetadataChangeTrigger from "./useMetadataChangeTrigger";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useMetadataChangeTrigger", () => {
  test("default export is defined", () => {
    expect(useMetadataChangeTrigger).toBeDefined();
  });
});
