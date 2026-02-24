import { columnsMessages, messages } from "./messages";

describe("permissionGroups/components/PermissionGroupListDatagrid/messages.ts", () => {
  it("should export columnsMessages", () => {
    expect(columnsMessages).toBeDefined();
  });

  it("should export messages", () => {
    expect(messages).toBeDefined();
  });
});
