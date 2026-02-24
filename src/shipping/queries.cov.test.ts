import {
  channelShippingZones,
  shippingZone,
  shippingZoneChannels,
  shippingZones,
  shippingZonesCount,
} from "./queries";

describe("shipping/queries.ts", () => {
  it("should export channelShippingZones", () => {
    expect(channelShippingZones).toBeDefined();
  });

  it("should export shippingZone", () => {
    expect(shippingZone).toBeDefined();
  });

  it("should export shippingZoneChannels", () => {
    expect(shippingZoneChannels).toBeDefined();
  });

  it("should export shippingZones", () => {
    expect(shippingZones).toBeDefined();
  });

  it("should export shippingZonesCount", () => {
    expect(shippingZonesCount).toBeDefined();
  });
});
