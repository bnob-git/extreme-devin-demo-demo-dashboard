import {
  promotinRuleCreate,
  promotionCreate,
  promotionDelete,
  promotionRuleDelete,
  promotionRuleUpdate,
  promotionUpdate,
  voucherBulkDelete,
  voucherCataloguesAdd,
  voucherCataloguesRemove,
  voucherChannelListingUpdate,
  voucherCreate,
  voucherDelete,
  voucherUpdate,
} from "./mutations";

describe("discounts/mutations.ts", () => {
  it("should export promotinRuleCreate", () => {
    expect(promotinRuleCreate).toBeDefined();
  });

  it("should export promotionCreate", () => {
    expect(promotionCreate).toBeDefined();
  });

  it("should export promotionDelete", () => {
    expect(promotionDelete).toBeDefined();
  });

  it("should export promotionRuleDelete", () => {
    expect(promotionRuleDelete).toBeDefined();
  });

  it("should export promotionRuleUpdate", () => {
    expect(promotionRuleUpdate).toBeDefined();
  });

  it("should export promotionUpdate", () => {
    expect(promotionUpdate).toBeDefined();
  });

  it("should export voucherBulkDelete", () => {
    expect(voucherBulkDelete).toBeDefined();
  });

  it("should export voucherCataloguesAdd", () => {
    expect(voucherCataloguesAdd).toBeDefined();
  });

  it("should export voucherCataloguesRemove", () => {
    expect(voucherCataloguesRemove).toBeDefined();
  });

  it("should export voucherChannelListingUpdate", () => {
    expect(voucherChannelListingUpdate).toBeDefined();
  });

  it("should export voucherCreate", () => {
    expect(voucherCreate).toBeDefined();
  });

  it("should export voucherDelete", () => {
    expect(voucherDelete).toBeDefined();
  });

  it("should export voucherUpdate", () => {
    expect(voucherUpdate).toBeDefined();
  });
});
