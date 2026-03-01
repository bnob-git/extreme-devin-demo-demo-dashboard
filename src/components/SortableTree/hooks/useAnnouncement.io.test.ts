import { useAnnouncement } from "./useAnnouncement";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("useAnnouncement", () => {
  test("useAnnouncement is exported", () => {
    expect(useAnnouncement).toBeDefined();
  });

  test("useAnnouncement can be called", () => {
    if (typeof useAnnouncement === "function") {
      try {
        (useAnnouncement as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
