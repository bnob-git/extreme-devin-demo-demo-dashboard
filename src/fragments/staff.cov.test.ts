import {
  staffMemberAvatarFragment,
  staffMemberDetailsFragment,
  staffMemberFragment,
} from "./staff";

describe("fragments/staff.ts", () => {
  it("should export staffMemberAvatarFragment", () => {
    expect(staffMemberAvatarFragment).toBeDefined();
  });

  it("should export staffMemberDetailsFragment", () => {
    expect(staffMemberDetailsFragment).toBeDefined();
  });

  it("should export staffMemberFragment", () => {
    expect(staffMemberFragment).toBeDefined();
  });
});
