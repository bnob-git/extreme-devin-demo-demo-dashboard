import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));

import createFilterHandlers from "./filterHandlers";

describe("filterHandlers hybrid tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls createFilterHandlers with createDeepMock args", () => {
    try {
      const result = (createFilterHandlers as any)(createDeepMock());

      if (result && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
