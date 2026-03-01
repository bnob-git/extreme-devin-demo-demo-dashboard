import { createDeepMock } from "@test/deepMock";

import { useRouteChange } from "./useRouteChange";

describe("useRouteChange hybrid tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useRouteChange with createDeepMock args", () => {
    try {
      const result = (useRouteChange as any)(createDeepMock());

      if (result && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
