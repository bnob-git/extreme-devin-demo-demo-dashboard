import { permissionGroupCreate, permissionGroupDelete, permissionGroupUpdate } from "./mutations";

describe("permissionGroups/mutations.ts", () => {
  it("should export permissionGroupCreate", () => {
    expect(permissionGroupCreate).toBeDefined();
  });

  it("should export permissionGroupDelete", () => {
    expect(permissionGroupDelete).toBeDefined();
  });

  it("should export permissionGroupUpdate", () => {
    expect(permissionGroupUpdate).toBeDefined();
  });
});
