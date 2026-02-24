import useChannels from "./useChannels";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useChannels", () => {
  test("default export is defined", () => {
    expect(useChannels).toBeDefined();
  });
});
