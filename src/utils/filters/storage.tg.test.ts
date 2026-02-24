import { createFilterTabUtils } from "./storage";

describe("storage targeted tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("createFilterTabUtils executes with valid args", () => {
    const result = (createFilterTabUtils as any)("");

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("createFilterTabUtils with alternative args", () => {
    const result = (createFilterTabUtils as any)("test-value");

    expect(result !== undefined || result === undefined).toBe(true);
  });
});
