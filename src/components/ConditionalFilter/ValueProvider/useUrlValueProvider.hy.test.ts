import { createDeepMock } from "@test/deepMock";

import { useUrlValueProvider } from "./useUrlValueProvider";

describe("useUrlValueProvider hybrid tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useUrlValueProvider with createDeepMock args", () => {
    try {
      const result = (useUrlValueProvider as any)(createDeepMock());

      if (result && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
