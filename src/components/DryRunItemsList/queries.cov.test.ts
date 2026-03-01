import { channels, checkouts } from "./queries";

describe("components/DryRunItemsList/queries.ts", () => {
  it("should export channels", () => {
    expect(channels).toBeDefined();
  });

  it("should export checkouts", () => {
    expect(checkouts).toBeDefined();
  });
});
