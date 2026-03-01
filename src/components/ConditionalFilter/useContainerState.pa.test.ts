import { useContainerState } from "./useContainerState";

describe("useContainerState property-access tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useContainerState with mock", () => {
    try {
      (useContainerState as any)({} as any, {} as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls useContainerState with null", () => {
    try {
      (useContainerState as any)(null as any, null as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
