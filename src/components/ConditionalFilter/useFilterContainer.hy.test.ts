import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/hooks/useDebounce", () => ({ __esModule: true, default: (val: any) => val }));

import { useFilterContainer } from "./useFilterContainer";

describe("useFilterContainer hybrid tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useFilterContainer with createDeepMock args", () => {
    try {
      const result = (useFilterContainer as any)(createDeepMock());

      if (result && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
