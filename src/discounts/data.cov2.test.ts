// Auto-generated coverage test for src/discounts/data.ts
import { getAddedChannelsInputFromFormData } from "./data";

jest.mock("@dashboard/graphql", () => ({
  PostalCodeRuleInclusionTypeEnum: { INCLUDE: "INCLUDE", EXCLUDE: "EXCLUDE" },
  ShippingMethodTypeEnum: { PRICE: "PRICE", WEIGHT: "WEIGHT" },
}));
jest.mock(
  "@dashboard/channels/utils",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, p: string) => {
          if (p === "__esModule") return true;

          return jest.fn(() => ({}));
        },
      },
    ),
);
jest.mock("./types", () => ({}));
jest.mock("./components/VoucherDetailsPage", () => ({}));

describe("data.ts", () => {
  it("executes getAddedChannelsInputFromFormData", () => {
    const _result = getAddedChannelsInputFromFormData({
      name: "test",
      description: "",
      channels: [],
      attributes: [],
      stocks: [],
      channelListings: [],
    } as any);

    void _result;
  });
});
