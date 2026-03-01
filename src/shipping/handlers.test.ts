import { PostalCodeRuleInclusionTypeEnum, ShippingMethodTypeEnum } from "@dashboard/graphql";

import {
  createChannelsChangeHandler,
  getCountrySelectionMap,
  getShippingMethodChannelVariables,
  getUpdateShippingPriceRateVariables,
  getUpdateShippingWeightRateVariables,
  isRestWorldCountriesSelected,
} from "./handlers";

describe("shipping/handlers", () => {
  describe("createChannelsChangeHandler", () => {
    it("should update channel and trigger change", () => {
      // Arrange
      const selectedChannels = [
        { id: "ch-1", name: "Ch1", currency: "USD", price: "10", minValue: "0", maxValue: "100" },
        { id: "ch-2", name: "Ch2", currency: "EUR", price: "20", minValue: "0", maxValue: "200" },
      ];
      const setSelectedChannels = jest.fn();
      const triggerChange = jest.fn();

      // Act
      const handler = createChannelsChangeHandler(
        selectedChannels,
        setSelectedChannels,
        triggerChange,
      );

      handler("ch-1", { price: "15", minValue: "5", maxValue: "150" });

      // Assert
      expect(setSelectedChannels).toHaveBeenCalledWith([
        { id: "ch-1", name: "Ch1", currency: "USD", price: "15", minValue: "5", maxValue: "150" },
        { id: "ch-2", name: "Ch2", currency: "EUR", price: "20", minValue: "0", maxValue: "200" },
      ]);
      expect(triggerChange).toHaveBeenCalled();
    });
  });

  describe("getUpdateShippingPriceRateVariables", () => {
    it("should return correct variables", () => {
      // Arrange
      const data = {
        name: "Test Rate",
        minDays: "1",
        maxDays: "5",
        description: '{"blocks":[]}',
        taxClassId: "tax-1",
        orderValueRestricted: false,
        minValue: "",
        maxValue: "",
        channelListings: [],
      } as any;
      const postalCodeRules = [
        {
          id: "new-1",
          start: "10000",
          end: "20000",
          inclusionType: PostalCodeRuleInclusionTypeEnum.INCLUDE,
          __typename: "ShippingMethodPostalCodeRule" as const,
        },
      ];

      // Act
      const result = getUpdateShippingPriceRateVariables(
        data,
        "zone-1",
        "rate-1",
        postalCodeRules,
        ["old-rule-1"],
      );

      // Assert
      expect(result.id).toBe("rate-1");
      expect(result.input.name).toBe("Test Rate");
      expect(result.input.shippingZone).toBe("zone-1");
      expect(result.input.type).toBe(ShippingMethodTypeEnum.PRICE);
      expect(result.input.minimumDeliveryDays).toBe(1);
      expect(result.input.maximumDeliveryDays).toBe(5);
      expect(result.input.deletePostalCodeRules).toEqual(["old-rule-1"]);
    });
  });

  describe("getUpdateShippingWeightRateVariables", () => {
    it("should return correct variables with weight restrictions", () => {
      // Arrange
      const data = {
        name: "Weight Rate",
        minDays: "2",
        maxDays: "7",
        minValue: "1.5",
        maxValue: "10.0",
        orderValueRestricted: true,
        description: '{"blocks":[]}',
        taxClassId: "tax-1",
        channelListings: [],
      } as any;
      const postalCodeRules = [] as any;

      // Act
      const result = getUpdateShippingWeightRateVariables(
        data,
        "zone-1",
        "rate-1",
        postalCodeRules,
        [],
      );

      // Assert
      expect(result.id).toBe("rate-1");
      expect(result.input.type).toBe(ShippingMethodTypeEnum.WEIGHT);
      expect(result.input.minimumOrderWeight).toBe(1.5);
      expect(result.input.maximumOrderWeight).toBe(10.0);
    });

    it("should return null for weights when not restricted", () => {
      const data = {
        name: "Weight Rate",
        minDays: "1",
        maxDays: "3",
        minValue: "1.5",
        maxValue: "10.0",
        orderValueRestricted: false,
        description: '{"blocks":[]}',
        taxClassId: "tax-1",
        channelListings: [],
      } as any;

      const result = getUpdateShippingWeightRateVariables(data, "zone-1", "rate-1", [] as any, []);

      expect(result.input.minimumOrderWeight).toBeNull();
      expect(result.input.maximumOrderWeight).toBeNull();
    });
  });

  describe("getShippingMethodChannelVariables", () => {
    it("should return variables with add channels", () => {
      const formChannels = [
        { id: "ch-1", name: "Ch1", currency: "USD", price: "10", minValue: "0", maxValue: "100" },
      ];
      const result = getShippingMethodChannelVariables("method-1", true, formChannels);

      expect(result.id).toBe("method-1");
      expect(result.input.addChannels?.length).toBe(1);
      expect(result.input.addChannels?.[0].channelId).toBe("ch-1");
      expect(result.input.addChannels?.[0].price).toBe("10");
    });

    it("should calculate removed channels", () => {
      const formChannels = [
        { id: "ch-1", name: "Ch1", currency: "USD", price: "10", minValue: "0", maxValue: "100" },
      ];
      const prevChannels = [
        { id: "ch-1", name: "Ch1", currency: "USD", price: "10", minValue: "0", maxValue: "100" },
        { id: "ch-2", name: "Ch2", currency: "EUR", price: "20", minValue: "0", maxValue: "200" },
      ];
      const result = getShippingMethodChannelVariables(
        "method-1",
        false,
        formChannels,
        prevChannels,
      );

      expect(result.input.removeChannels).toEqual(["ch-2"]);
    });

    it("should set null for min/max when not restricted", () => {
      const formChannels = [
        { id: "ch-1", name: "Ch1", currency: "USD", price: "10", minValue: "5", maxValue: "100" },
      ];
      const result = getShippingMethodChannelVariables("method-1", false, formChannels);

      expect(result.input.addChannels?.[0].minimumOrderPrice).toBeNull();
      expect(result.input.addChannels?.[0].maximumOrderPrice).toBeNull();
    });
  });

  describe("getCountrySelectionMap", () => {
    it("should return empty object for undefined inputs", () => {
      expect(getCountrySelectionMap(undefined, undefined)).toEqual({});
    });

    it("should map countries to selection state", () => {
      const countries = [
        { code: "US", country: "United States" },
        { code: "GB", country: "United Kingdom" },
        { code: "DE", country: "Germany" },
      ] as any;
      const selected = ["US", "DE"];
      const result = getCountrySelectionMap(countries, selected);

      expect(result).toEqual({
        US: true,
        GB: false,
        DE: true,
      });
    });
  });

  describe("isRestWorldCountriesSelected", () => {
    it("should return false for undefined inputs", () => {
      expect(isRestWorldCountriesSelected(undefined, undefined)).toBeFalsy();
    });

    it("should return true when all rest world countries are selected", () => {
      const restWorld = ["US", "GB"];
      const selectionMap = { US: true, GB: true, DE: false };

      expect(isRestWorldCountriesSelected(restWorld, selectionMap)).toBe(true);
    });

    it("should return false when not all rest world countries are selected", () => {
      const restWorld = ["US", "GB"];
      const selectionMap = { US: true, GB: false };

      expect(isRestWorldCountriesSelected(restWorld, selectionMap)).toBe(false);
    });
  });
});
