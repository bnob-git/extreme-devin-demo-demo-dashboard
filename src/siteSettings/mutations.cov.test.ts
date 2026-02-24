import { refundReasonReferenceClear, refundSettingsUpdate, shopSettingsUpdate } from "./mutations";

describe("siteSettings/mutations.ts", () => {
  it("should export refundReasonReferenceClear", () => {
    expect(refundReasonReferenceClear).toBeDefined();
  });

  it("should export refundSettingsUpdate", () => {
    expect(refundSettingsUpdate).toBeDefined();
  });

  it("should export shopSettingsUpdate", () => {
    expect(shopSettingsUpdate).toBeDefined();
  });
});
