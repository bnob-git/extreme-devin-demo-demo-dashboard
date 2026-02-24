// Manual test for handlers.ts - executes handler factory functions properly

import { createRuleCreateHandler, createRuleUpdateHandler, createUpdateHandler } from "./handlers";

// Mock toAPI to return a function that returns rule data
jest.mock("@dashboard/discounts/models", () => ({
  toAPI: () => (data: any) => ({
    channels: data?.channels || [],
    gifts: data?.gifts || [],
    name: data?.name || "test",
    orderPredicate: null,
    cataloguePredicate: null,
    rewardValue: 10,
    rewardValueType: "FIXED",
    rewardType: "SUBTOTAL_DISCOUNT",
  }),
  Rule: jest.fn(),
}));

// Mock getMutationErrors and joinDateTime with real-like implementations
jest.mock("@dashboard/misc", () => ({
  getMutationErrors: (result: any) => {
    if (!result?.data) return [];

    const data = result.data;

    for (const key of Object.keys(data)) {
      if (data[key]?.errors) return data[key].errors;
    }

    return [];
  },
  joinDateTime: (date: string, time: string) => date + "T" + time,
  weight: (w: any) => w,
}));

jest.mock("@dashboard/graphql", () => ({}));
jest.mock("@dashboard/utils/errors/common", () => ({}));

describe("createUpdateHandler", () => {
  it("returns early when promotion is null", async () => {
    const update = jest.fn();
    const handler = createUpdateHandler(null, update);
    const result = await handler({
      name: "test",
      description: "",
      dates: {
        startDate: "2024-01-01",
        startTime: "00:00",
        endDate: "2024-12-31",
        endTime: "23:59",
        hasEndDate: false,
      },
    } as any);

    expect(result).toBeUndefined();
    expect(update).not.toHaveBeenCalled();
  });

  it("calls update and returns empty errors on success", async () => {
    const update = jest.fn().mockResolvedValue({
      data: { promotionUpdate: { errors: [] } },
    });
    const handler = createUpdateHandler({ id: "promo-1", name: "Test", rules: [] } as any, update);
    const result = await handler({
      name: "Updated Promo",
      description: "",
      dates: {
        startDate: "2024-01-01",
        startTime: "00:00",
        endDate: "2024-12-31",
        endTime: "23:59",
        hasEndDate: false,
      },
    } as any);

    expect(update).toHaveBeenCalled();
    expect(result).toEqual({ errors: [] });
  });

  it("returns errors when update fails", async () => {
    const mockError = { field: "name", message: "Required" };
    const update = jest.fn().mockResolvedValue({
      data: { promotionUpdate: { errors: [mockError] } },
    });
    const handler = createUpdateHandler({ id: "promo-1", name: "Test", rules: [] } as any, update);
    const result = await handler({
      name: "",
      description: '{"blocks":[]}',
      dates: {
        startDate: "2024-01-01",
        startTime: "00:00",
        endDate: "2024-12-31",
        endTime: "23:59",
        hasEndDate: true,
      },
    } as any);

    expect(result).toEqual({ errors: [mockError] });
  });
});

describe("createRuleUpdateHandler", () => {
  it("returns empty errors when promotionData is null", async () => {
    const updateRule = jest.fn();
    const handler = createRuleUpdateHandler(null, updateRule);
    const result = await handler({ id: "rule-1" } as any);

    expect(result).toEqual([]);
    expect(updateRule).not.toHaveBeenCalled();
  });

  it("calls updateRule and returns empty errors on success", async () => {
    const updateRule = jest.fn().mockResolvedValue({
      data: { promotionRuleUpdate: { errors: [] } },
    });
    const handler = createRuleUpdateHandler(
      {
        id: "promo-1",
        type: "CATALOGUE",
        rules: [{ id: "rule-1", channels: [{ id: "ch-1" }], giftIds: ["gift-1"] }],
      } as any,
      updateRule,
    );
    const result = await handler({
      id: "rule-1",
      name: "Rule 1",
      channels: ["ch-1"],
      gifts: [],
    } as any);

    expect(updateRule).toHaveBeenCalled();
    expect(result).toEqual([]);
  });

  it("returns errors when updateRule fails", async () => {
    const mockError = { field: "name", message: "Invalid", code: "INVALID" };
    const updateRule = jest.fn().mockResolvedValue({
      data: { promotionRuleUpdate: { errors: [mockError] } },
    });
    const handler = createRuleUpdateHandler(
      {
        id: "promo-1",
        type: "CATALOGUE",
        rules: [],
      } as any,
      updateRule,
    );
    const result = await handler({
      id: "rule-1",
      name: "Rule 1",
      channels: [],
      gifts: [],
    } as any);

    expect(result).toEqual([mockError]);
  });
});

describe("createRuleCreateHandler", () => {
  it("calls createRule and returns empty errors on success", async () => {
    const createRule = jest.fn().mockResolvedValue({
      data: { promotionRuleCreate: { errors: [] } },
    });
    const handler = createRuleCreateHandler(
      { id: "promo-1", type: "CATALOGUE" } as any,
      createRule,
    );
    const result = await handler({
      id: "rule-new",
      name: "New Rule",
      channels: [],
      gifts: [],
    } as any);

    expect(createRule).toHaveBeenCalled();
    expect(result).toEqual([]);
  });

  it("returns errors when createRule fails", async () => {
    const mockError = { field: "name", message: "Required", code: "REQUIRED" };
    const createRule = jest.fn().mockResolvedValue({
      data: { promotionRuleCreate: { errors: [mockError] } },
    });
    const handler = createRuleCreateHandler(
      { id: "promo-1", type: "CATALOGUE" } as any,
      createRule,
    );
    const result = await handler({
      id: "rule-new",
      name: "",
      channels: [],
      gifts: [],
    } as any);

    expect(result).toEqual([mockError]);
  });
});
