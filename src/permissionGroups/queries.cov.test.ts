import { permissionGroupDetailsQuery, permissionGroupListQuery } from "./queries";

describe("permissionGroups/queries.ts", () => {
  it("should export permissionGroupDetailsQuery", () => {
    expect(permissionGroupDetailsQuery).toBeDefined();
  });

  it("should export permissionGroupListQuery", () => {
    expect(permissionGroupListQuery).toBeDefined();
  });
});
