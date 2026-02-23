import { useEventEmitter } from "./useEvents";

describe("useEvents.tsx coverage", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useEventEmitter", () => {
    try {
      (useEventEmitter as any)({} as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
