import {
  changeUserPassword,
  staffMemberAddMutation,
  staffMemberDeleteMutation,
  staffMemberUpdateMutation,
  userAccountUpdateMutation,
  userAvatarDeleteMutation,
  userAvatarUpdateMutation,
  userPassowrdChangeMutation,
} from "./mutations";

describe("staff/mutations.ts", () => {
  it("should export changeUserPassword", () => {
    expect(changeUserPassword).toBeDefined();
  });

  it("should export staffMemberAddMutation", () => {
    expect(staffMemberAddMutation).toBeDefined();
  });

  it("should export staffMemberDeleteMutation", () => {
    expect(staffMemberDeleteMutation).toBeDefined();
  });

  it("should export staffMemberUpdateMutation", () => {
    expect(staffMemberUpdateMutation).toBeDefined();
  });

  it("should export userAccountUpdateMutation", () => {
    expect(userAccountUpdateMutation).toBeDefined();
  });

  it("should export userAvatarDeleteMutation", () => {
    expect(userAvatarDeleteMutation).toBeDefined();
  });

  it("should export userAvatarUpdateMutation", () => {
    expect(userAvatarUpdateMutation).toBeDefined();
  });

  it("should export userPassowrdChangeMutation", () => {
    expect(userPassowrdChangeMutation).toBeDefined();
  });
});
