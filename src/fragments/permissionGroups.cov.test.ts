import {
  permissionFragment,
  permissionGroupDetailsFragment,
  permissionGroupFragment,
  permissionGroupMember,
} from "./permissionGroups";

describe("fragments/permissionGroups.ts", () => {
  it("should export permissionFragment", () => {
    expect(permissionFragment).toBeDefined();
  });

  it("should export permissionGroupDetailsFragment", () => {
    expect(permissionGroupDetailsFragment).toBeDefined();
  });

  it("should export permissionGroupFragment", () => {
    expect(permissionGroupFragment).toBeDefined();
  });

  it("should export permissionGroupMember", () => {
    expect(permissionGroupMember).toBeDefined();
  });
});
