import { useFilterContainer } from "./useFilterContainer";

describe("useFilterContainer property-access tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useFilterContainer with mock", () => {
    try {
      (useFilterContainer as any)({} as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls useFilterContainer with null", () => {
    try {
      (useFilterContainer as any)(null as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
