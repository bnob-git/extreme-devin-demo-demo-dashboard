import { triggerWebhookDryRun } from "./mutations";

describe("components/DryRun/mutations.ts", () => {
  it("should export triggerWebhookDryRun", () => {
    expect(triggerWebhookDryRun).toBeDefined();
  });
});
