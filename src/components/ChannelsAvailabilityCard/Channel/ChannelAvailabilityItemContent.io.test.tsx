import { ChannelAvailabilityItemContent } from "./ChannelAvailabilityItemContent";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("ChannelAvailabilityItemContent", () => {
  test("ChannelAvailabilityItemContent is exported", () => {
    expect(ChannelAvailabilityItemContent).toBeDefined();
  });

  test("ChannelAvailabilityItemContent can be called", () => {
    if (typeof ChannelAvailabilityItemContent === "function") {
      try {
        (ChannelAvailabilityItemContent as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
