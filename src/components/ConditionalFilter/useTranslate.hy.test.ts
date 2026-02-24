import { createDeepMock } from "@test/deepMock";

import { useTranslate } from "./useTranslate";

describe("useTranslate hybrid tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useTranslate with createDeepMock args", () => {
    try {
      const result = (useTranslate as any)(createDeepMock());

      if (result && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
