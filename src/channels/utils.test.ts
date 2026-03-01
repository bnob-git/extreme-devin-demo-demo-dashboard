import { RequirementsPicker } from "@dashboard/discounts/types";

import {
  createChannelsDataWithDiscountPrice,
  createCollectionChannels,
  createCollectionChannelsData,
  createShippingChannelsFromRate,
  createSortedChannelsData,
  createSortedChannelsDataFromVoucher,
  createSortedShippingChannels,
  createSortedVoucherData,
  createVariantChannels,
  getChannelsCurrencyChoices,
  isAvailableInChannel,
  validateVoucherPrice,
} from "./utils";

describe("channels/utils", () => {
  describe("createCollectionChannels", () => {
    it("should return undefined for undefined data", () => {
      expect(createCollectionChannels(undefined)).toBeUndefined();
    });

    it("should map channels to collection channel data", () => {
      const channels = [
        {
          id: "ch-1",
          name: "Channel 1",
          currencyCode: "USD",
          slug: "channel-1",
          __typename: "Channel" as const,
        },
        {
          id: "ch-2",
          name: "Channel 2",
          currencyCode: "EUR",
          slug: "channel-2",
          __typename: "Channel" as const,
        },
      ];
      const result = createCollectionChannels(channels);

      expect(result).toEqual([
        { id: "ch-1", isPublished: false, name: "Channel 1", publishedAt: null },
        { id: "ch-2", isPublished: false, name: "Channel 2", publishedAt: null },
      ]);
    });
  });

  describe("createVariantChannels", () => {
    it("should return empty array for undefined data", () => {
      expect(createVariantChannels(undefined)).toEqual([]);
    });

    it("should map variant channel listings", () => {
      const data = {
        channelListings: [
          {
            costPrice: { amount: 10, __typename: "Money" },
            channel: { id: "ch-1", name: "Channel 1", currencyCode: "USD" },
            price: { amount: 20 },
          },
        ],
      } as any;
      const result = createVariantChannels(data);

      expect(result).toEqual([
        {
          costPrice: "10",
          currency: "USD",
          id: "ch-1",
          name: "Channel 1",
          price: "20",
        },
      ]);
    });
  });

  describe("createChannelsDataWithDiscountPrice", () => {
    it("should return empty array when no data", () => {
      expect(createChannelsDataWithDiscountPrice(undefined, undefined)).toEqual([]);
    });

    it("should return empty array when data but no voucher listings", () => {
      const channels = [
        {
          id: "ch-1",
          name: "Ch 1",
          currencyCode: "USD",
          slug: "ch-1",
          __typename: "Channel" as const,
        },
      ];

      expect(createChannelsDataWithDiscountPrice(undefined, channels)).toEqual([]);
    });

    it("should merge voucher and channel data", () => {
      const voucher = {
        channelListings: [
          {
            channel: { id: "ch-1", name: "Channel 1", currencyCode: "USD" },
            discountValue: 10,
            minSpent: { amount: 50, currency: "USD" },
          },
        ],
      } as any;
      const channels = [
        {
          id: "ch-1",
          name: "Channel 1",
          currencyCode: "USD",
          slug: "ch-1",
          __typename: "Channel" as const,
        },
        {
          id: "ch-2",
          name: "Channel 2",
          currencyCode: "EUR",
          slug: "ch-2",
          __typename: "Channel" as const,
        },
      ];
      const result = createChannelsDataWithDiscountPrice(voucher, channels);

      expect(result.length).toBe(2);
    });
  });

  describe("createShippingChannelsFromRate", () => {
    it("should return empty array for undefined data", () => {
      expect(createShippingChannelsFromRate(undefined)).toEqual([]);
    });

    it("should map channel listings to shipping data", () => {
      const data = [
        {
          channel: { id: "ch-1", name: "Channel 1", currencyCode: "USD" },
          maximumOrderPrice: { amount: 100 },
          minimumOrderPrice: { amount: 10 },
          price: { amount: 5 },
        },
      ] as any;
      const result = createShippingChannelsFromRate(data);

      expect(result).toEqual([
        {
          currency: "USD",
          id: "ch-1",
          maxValue: "100",
          minValue: "10",
          name: "Channel 1",
          price: "5",
        },
      ]);
    });

    it("should handle null prices", () => {
      const data = [
        {
          channel: { id: "ch-1", name: "Channel 1", currencyCode: "USD" },
          maximumOrderPrice: null,
          minimumOrderPrice: null,
          price: null,
        },
      ] as any;
      const result = createShippingChannelsFromRate(data);

      expect(result[0].maxValue).toBe("");
      expect(result[0].minValue).toBe("");
      expect(result[0].price).toBe("");
    });
  });

  describe("createCollectionChannelsData", () => {
    it("should return undefined for undefined data", () => {
      expect(createCollectionChannelsData(undefined)).toBeUndefined();
    });

    it("should return undefined for data without channelListings", () => {
      expect(createCollectionChannelsData({} as any)).toBeUndefined();
    });

    it("should map collection channel listings", () => {
      const data = {
        channelListings: [
          {
            channel: { id: "ch-1", name: "Channel 1" },
            isPublished: true,
            publishedAt: "2023-01-01",
          },
        ],
      } as any;
      const result = createCollectionChannelsData(data);

      expect(result).toEqual([
        { id: "ch-1", isPublished: true, name: "Channel 1", publishedAt: "2023-01-01" },
      ]);
    });
  });

  describe("createSortedChannelsData", () => {
    it("should return sorted channels by name", () => {
      const channels = [
        {
          id: "2",
          name: "Banana",
          currencyCode: "USD",
          slug: "banana",
          __typename: "Channel" as const,
        },
        {
          id: "1",
          name: "Apple",
          currencyCode: "EUR",
          slug: "apple",
          __typename: "Channel" as const,
        },
      ];
      const result = createSortedChannelsData(channels);

      expect(result![0].name).toBe("Apple");
      expect(result![1].name).toBe("Banana");
    });
  });

  describe("createSortedShippingChannels", () => {
    it("should return sorted shipping channels by name", () => {
      const channels = [
        { id: "2", name: "Beta", currencyCode: "USD" },
        { id: "1", name: "Alpha", currencyCode: "EUR" },
      ] as any;
      const result = createSortedShippingChannels(channels);

      expect(result![0].name).toBe("Alpha");
    });
  });

  describe("createSortedVoucherData", () => {
    it("should return sorted voucher data", () => {
      const channels = [
        {
          id: "2",
          name: "Zeta",
          currencyCode: "USD",
          slug: "zeta",
          __typename: "Channel" as const,
        },
        {
          id: "1",
          name: "Alpha",
          currencyCode: "EUR",
          slug: "alpha",
          __typename: "Channel" as const,
        },
      ];
      const result = createSortedVoucherData(channels);

      expect(result![0].name).toBe("Alpha");
    });
  });

  describe("createSortedChannelsDataFromVoucher", () => {
    it("should return empty array when no data", () => {
      expect(createSortedChannelsDataFromVoucher(undefined)).toEqual([]);
    });
  });

  describe("getChannelsCurrencyChoices", () => {
    it("should return empty array when no id", () => {
      expect(getChannelsCurrencyChoices("", {} as any, [])).toEqual([]);
    });

    it("should filter channels by currency and exclude current", () => {
      const selected = { id: "ch-1", currencyCode: "USD", name: "Channel 1" } as any;
      const channels = [
        { id: "ch-1", currencyCode: "USD", name: "Channel 1" },
        { id: "ch-2", currencyCode: "USD", name: "Channel 2" },
        { id: "ch-3", currencyCode: "EUR", name: "Channel 3" },
      ] as any;
      const result = getChannelsCurrencyChoices("ch-1", selected, channels);

      expect(result.length).toBe(1);
      expect(result[0].value).toBe("ch-2");
    });
  });

  describe("validateVoucherPrice", () => {
    it("should validate discount value", () => {
      const channel = { discountValue: "", minSpent: "0", id: "1", name: "test", currency: "USD" };
      const result = validateVoucherPrice(RequirementsPicker.NONE, channel);

      expect(result).toBeTruthy();
    });

    it("should validate min spent for ORDER requirement", () => {
      const channel = { discountValue: "10", minSpent: "", id: "1", name: "test", currency: "USD" };
      const result = validateVoucherPrice(RequirementsPicker.ORDER, channel);

      expect(result).toBeTruthy();
    });
  });

  describe("isAvailableInChannel", () => {
    it("should return true when channel is available", () => {
      const result = isAvailableInChannel({
        availableChannels: [{ id: "ch-1" }, { id: "ch-2" }],
        channelListings: [{ channel: { id: "ch-1" } }],
      });

      expect(result).toBe(true);
    });

    it("should return false when channel is not available", () => {
      const result = isAvailableInChannel({
        availableChannels: [{ id: "ch-3" }],
        channelListings: [{ channel: { id: "ch-1" } }],
      });

      expect(result).toBe(false);
    });
  });
});
