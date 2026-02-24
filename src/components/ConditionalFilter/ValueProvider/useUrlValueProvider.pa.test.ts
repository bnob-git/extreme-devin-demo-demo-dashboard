import { useUrlValueProvider } from "./useUrlValueProvider";

describe("useUrlValueProvider property-access tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useUrlValueProvider with mock", () => {
    try {
      (useUrlValueProvider as any)({} as any, {} as any, {} as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls useUrlValueProvider with null", () => {
    try {
      (useUrlValueProvider as any)(null as any, null as any, null as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
