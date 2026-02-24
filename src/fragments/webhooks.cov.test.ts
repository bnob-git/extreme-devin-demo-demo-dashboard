import { webhookDetailsFragment, webhookFragment } from "./webhooks";

describe("fragments/webhooks.ts", () => {
  it("should export webhookDetailsFragment", () => {
    expect(webhookDetailsFragment).toBeDefined();
  });

  it("should export webhookFragment", () => {
    expect(webhookFragment).toBeDefined();
  });
});
