import { appFailedPendingWebhooks } from "./queries";

describe("extensions/components/AppAlerts/queries.ts", () => {
  it("should export appFailedPendingWebhooks", () => {
    expect(appFailedPendingWebhooks).toBeDefined();
  });
});
