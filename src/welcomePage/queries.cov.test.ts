import { welcomePageActivities, welcomePageAnalytics, welcomePageNotifications } from "./queries";

describe("welcomePage/queries.ts", () => {
  it("should export welcomePageActivities", () => {
    expect(welcomePageActivities).toBeDefined();
  });

  it("should export welcomePageAnalytics", () => {
    expect(welcomePageAnalytics).toBeDefined();
  });

  it("should export welcomePageNotifications", () => {
    expect(welcomePageNotifications).toBeDefined();
  });
});
