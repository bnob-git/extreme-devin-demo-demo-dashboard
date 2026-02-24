import {
  ConditionalAttributesFilterProvider,
  ConditionalCollectionFilterProvider,
  ConditionalCustomerFilterProvider,
  ConditionalDiscountFilterProvider,
  ConditionalDraftOrderFilterProvider,
  ConditionalGiftCardsFilterProver,
  ConditionalOrderFilterProvider,
  ConditionalPageFilterProvider,
  ConditionalProductFilterProvider,
  ConditionalProductTypesFilterProvider,
  ConditionalStaffMembersFilterProvider,
  ConditionalVoucherFilterProvider,
} from "./provider";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("provider", () => {
  test("ConditionalProductFilterProvider is exported", () => {
    expect(ConditionalProductFilterProvider).toBeDefined();
  });

  test("ConditionalDiscountFilterProvider is exported", () => {
    expect(ConditionalDiscountFilterProvider).toBeDefined();
  });

  test("ConditionalOrderFilterProvider is exported", () => {
    expect(ConditionalOrderFilterProvider).toBeDefined();
  });

  test("ConditionalVoucherFilterProvider is exported", () => {
    expect(ConditionalVoucherFilterProvider).toBeDefined();
  });

  test("ConditionalPageFilterProvider is exported", () => {
    expect(ConditionalPageFilterProvider).toBeDefined();
  });

  test("ConditionalDraftOrderFilterProvider is exported", () => {
    expect(ConditionalDraftOrderFilterProvider).toBeDefined();
  });

  test("ConditionalGiftCardsFilterProver is exported", () => {
    expect(ConditionalGiftCardsFilterProver).toBeDefined();
  });

  test("ConditionalCustomerFilterProvider is exported", () => {
    expect(ConditionalCustomerFilterProvider).toBeDefined();
  });

  test("ConditionalCollectionFilterProvider is exported", () => {
    expect(ConditionalCollectionFilterProvider).toBeDefined();
  });

  test("ConditionalProductTypesFilterProvider is exported", () => {
    expect(ConditionalProductTypesFilterProvider).toBeDefined();
  });

  test("ConditionalStaffMembersFilterProvider is exported", () => {
    expect(ConditionalStaffMembersFilterProvider).toBeDefined();
  });

  test("ConditionalAttributesFilterProvider is exported", () => {
    expect(ConditionalAttributesFilterProvider).toBeDefined();
  });
});
