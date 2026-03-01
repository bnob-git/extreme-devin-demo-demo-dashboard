import {
  menuBulkDelete,
  menuCreate,
  menuDelete,
  menuItemCreate,
  menuItemUpdate,
  menuUpdate,
} from "./mutations";

describe("structures/mutations.ts", () => {
  it("should export menuBulkDelete", () => {
    expect(menuBulkDelete).toBeDefined();
  });

  it("should export menuCreate", () => {
    expect(menuCreate).toBeDefined();
  });

  it("should export menuDelete", () => {
    expect(menuDelete).toBeDefined();
  });

  it("should export menuItemCreate", () => {
    expect(menuItemCreate).toBeDefined();
  });

  it("should export menuItemUpdate", () => {
    expect(menuItemUpdate).toBeDefined();
  });

  it("should export menuUpdate", () => {
    expect(menuUpdate).toBeDefined();
  });
});
