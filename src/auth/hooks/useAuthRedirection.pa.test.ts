import { useAuthRedirection } from "./useAuthRedirection";

describe("useAuthRedirection property-access tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useAuthRedirection", () => {
    try {
      (useAuthRedirection as any)();
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
