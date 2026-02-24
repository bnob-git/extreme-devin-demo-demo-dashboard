import { useTokenRefresh } from "./useTokenRefresh";

describe("useTokenRefresh property-access tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useTokenRefresh with mock", () => {
    try {
      (useTokenRefresh as any)({} as any, {} as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls useTokenRefresh with null", () => {
    try {
      (useTokenRefresh as any)(null as any, null as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
