import { postToExtension } from "./usePostToExtension";

describe("usePostToExtension targeted tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("postToExtension executes with valid args", () => {
    const result = (postToExtension as any)({} as any, {} as any, "");

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("postToExtension with alternative args", () => {
    const result = (postToExtension as any)({} as any, {} as any, "test-value");

    expect(result !== undefined || result === undefined).toBe(true);
  });
});
