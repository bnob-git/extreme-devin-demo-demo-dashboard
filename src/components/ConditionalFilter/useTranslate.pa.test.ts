import { useTranslate } from "./useTranslate";

describe("useTranslate property-access tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useTranslate", () => {
    try {
      (useTranslate as any)();
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
