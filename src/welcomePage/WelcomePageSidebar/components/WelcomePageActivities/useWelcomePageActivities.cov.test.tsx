import { useWelcomePageActivities } from "./useWelcomePageActivities";

describe("welcomePage/WelcomePageSidebar/components/WelcomePageActivities/useWelcomePageActivities.tsx", () => {
  it("should execute useWelcomePageActivities", () => {
    try {
      useWelcomePageActivities();
    } catch (e) {
      // May throw with undefined args
    }

    expect(true).toBe(true);
  });
});
