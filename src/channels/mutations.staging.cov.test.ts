import { channelCreateMutation, channelUpdateMutation } from "./mutations.staging";

describe("channels/mutations.staging.ts", () => {
  it("should export channelCreateMutation", () => {
    expect(channelCreateMutation).toBeDefined();
  });

  it("should export channelUpdateMutation", () => {
    expect(channelUpdateMutation).toBeDefined();
  });
});
