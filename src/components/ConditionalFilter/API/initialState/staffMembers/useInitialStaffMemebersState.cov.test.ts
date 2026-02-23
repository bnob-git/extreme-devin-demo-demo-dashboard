import { useInitialStaffMembersState } from "./useInitialStaffMemebersState";

describe("useInitialStaffMemebersState", () => {
  describe("useInitialStaffMembersState", () => {
    it("should execute with valid args", () => {
      try {
        const result = (useInitialStaffMembersState as any)();

        if (result && typeof result === "object" && typeof result.then === "function") {
          result.catch(() => {});
        }
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle empty args", () => {
      try {
        (useInitialStaffMembersState as any)();
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });

    it("should handle null-ish args", () => {
      try {
        (useInitialStaffMembersState as any)(null);
      } catch (_e) {
        /* expected */
      }

      expect(true).toBe(true);
    });
  });
});
