import {
  channelActivateMutation,
  channelCreateMutation,
  channelDeactivateMutation,
  channelDeleteMutation,
  ChannelReorderWarehousesMutation,
  channelUpdateMutation,
} from "./mutations";

describe("channels/mutations.ts", () => {
  it("should export ChannelReorderWarehousesMutation", () => {
    expect(ChannelReorderWarehousesMutation).toBeDefined();
  });

  it("should export channelActivateMutation", () => {
    expect(channelActivateMutation).toBeDefined();
  });

  it("should export channelCreateMutation", () => {
    expect(channelCreateMutation).toBeDefined();
  });

  it("should export channelDeactivateMutation", () => {
    expect(channelDeactivateMutation).toBeDefined();
  });

  it("should export channelDeleteMutation", () => {
    expect(channelDeleteMutation).toBeDefined();
  });

  it("should export channelUpdateMutation", () => {
    expect(channelUpdateMutation).toBeDefined();
  });
});
