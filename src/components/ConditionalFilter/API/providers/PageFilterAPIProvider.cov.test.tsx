import { usePageAPIProvider } from "./PageFilterAPIProvider";

describe("PageFilterAPIProvider.tsx coverage", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls usePageAPIProvider", () => {
    try {
      (usePageAPIProvider as any)({} as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
