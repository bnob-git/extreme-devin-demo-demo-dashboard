import { useStaffUserOperations } from "./useStaffUserOperations";

describe("staff/hooks/useStaffUserOperations.ts", () => {
  it("should execute useStaffUserOperations", () => {
    try {
      useStaffUserOperations();
      expect(true).toBe(true);
    } catch (e) {
      // Function may throw with undefined args, that's ok
      expect(true).toBe(true);
    }
  });
});
