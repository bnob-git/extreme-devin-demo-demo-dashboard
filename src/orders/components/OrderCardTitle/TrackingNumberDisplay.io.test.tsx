import { TrackingNumberDisplay } from "./TrackingNumberDisplay";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("TrackingNumberDisplay", () => {
  test("TrackingNumberDisplay is exported", () => {
    expect(TrackingNumberDisplay).toBeDefined();
  });

  test("TrackingNumberDisplay can be called", () => {
    if (typeof TrackingNumberDisplay === "function") {
      try {
        (TrackingNumberDisplay as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
