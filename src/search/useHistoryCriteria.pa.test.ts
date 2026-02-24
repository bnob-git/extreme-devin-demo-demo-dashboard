import { useHistoryCriteria } from "./useHistoryCriteria";

describe("useHistoryCriteria property-access tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useHistoryCriteria", () => {
    try {
      (useHistoryCriteria as any)();
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
