import {
  fragmentUser,
  fragmentUserBase,
  fragmentUserBaseAvatar,
  userUserPermissionFragment,
  userUserPermissionWithSourcePermissionGroupsFragment,
} from "./auth";

describe("fragments/auth.ts", () => {
  it("should export fragmentUser", () => {
    expect(fragmentUser).toBeDefined();
  });

  it("should export fragmentUserBase", () => {
    expect(fragmentUserBase).toBeDefined();
  });

  it("should export fragmentUserBaseAvatar", () => {
    expect(fragmentUserBaseAvatar).toBeDefined();
  });

  it("should export userUserPermissionFragment", () => {
    expect(userUserPermissionFragment).toBeDefined();
  });

  it("should export userUserPermissionWithSourcePermissionGroupsFragment", () => {
    expect(userUserPermissionWithSourcePermissionGroupsFragment).toBeDefined();
  });
});
