import { staffList, staffMemberDetails } from "./queries";

describe("staff/queries.ts", () => {
  it("should export staffList", () => {
    expect(staffList).toBeDefined();
  });

  it("should export staffMemberDetails", () => {
    expect(staffMemberDetails).toBeDefined();
  });
});
