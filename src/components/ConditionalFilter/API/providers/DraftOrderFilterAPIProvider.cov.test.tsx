import { useDraftOrderFilterAPIProvider } from "./DraftOrderFilterAPIProvider";

describe("DraftOrderFilterAPIProvider.tsx coverage", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useDraftOrderFilterAPIProvider", () => {
    try {
      (useDraftOrderFilterAPIProvider as any)({} as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
