import { channelDetails, channelsList, channelsListBase } from "./queries.staging";

describe("channels/queries.staging.ts", () => {
  it("should export channelDetails", () => {
    expect(channelDetails).toBeDefined();
  });

  it("should export channelsList", () => {
    expect(channelsList).toBeDefined();
  });

  it("should export channelsListBase", () => {
    expect(channelsListBase).toBeDefined();
  });
});
