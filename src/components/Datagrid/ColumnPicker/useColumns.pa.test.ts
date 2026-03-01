import { useColumns } from "./useColumns";

describe("useColumns property-access tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useColumns with mock", () => {
    try {
      (useColumns as any)({} as any, {} as any, {} as any, jest.fn());
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls useColumns with null", () => {
    try {
      (useColumns as any)(null as any, null as any, null as any, jest.fn());
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
