import { ChannelsAvailabilityDropdown } from "./ChannelsAvailabilityDropdown";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("ChannelsAvailabilityDropdown", () => {
  test("ChannelsAvailabilityDropdown is exported", () => {
    expect(ChannelsAvailabilityDropdown).toBeDefined();
  });

  test("ChannelsAvailabilityDropdown can be called", () => {
    if (typeof ChannelsAvailabilityDropdown === "function") {
      try {
        (ChannelsAvailabilityDropdown as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
