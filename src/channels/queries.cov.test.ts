import { channelDetails, channelsList, channelsListBase } from "./queries";

describe("channels/queries.ts", () => {
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
