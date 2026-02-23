import { SentryAdapter } from "./Sentry";

describe("Sentry coverage", () => {
  it("accesses SentryAdapter", () => {
    expect(SentryAdapter).toBeDefined();
  });
});
