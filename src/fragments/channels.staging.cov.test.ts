import { channelDetailsFragment, channelErrorFragment, channelFragment } from "./channels.staging";

describe("fragments/channels.staging.ts", () => {
  it("should export channelDetailsFragment", () => {
    expect(channelDetailsFragment).toBeDefined();
  });

  it("should export channelErrorFragment", () => {
    expect(channelErrorFragment).toBeDefined();
  });

  it("should export channelFragment", () => {
    expect(channelFragment).toBeDefined();
  });
});
