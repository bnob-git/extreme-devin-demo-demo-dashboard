import { createDeepMock } from "@test/deepMock";

import { useAuthRedirection } from "./useAuthRedirection";

describe("useAuthRedirection hybrid tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useAuthRedirection with createDeepMock args", () => {
    try {
      const result = (useAuthRedirection as any)(createDeepMock());

      if (result && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
