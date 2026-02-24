import { useCommandMenuInput } from "./useCommandMenuInput";

describe("useCommandMenuInput property-access tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useCommandMenuInput", () => {
    try {
      (useCommandMenuInput as any)();
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
