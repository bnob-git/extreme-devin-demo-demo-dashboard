import {
  categoryBulkDeleteMutation,
  categoryCreateMutation,
  categoryDeleteMutation,
  categoryUpdateMutation,
} from "./mutations";

describe("categories/mutations.ts", () => {
  it("should export categoryBulkDeleteMutation", () => {
    expect(categoryBulkDeleteMutation).toBeDefined();
  });

  it("should export categoryCreateMutation", () => {
    expect(categoryCreateMutation).toBeDefined();
  });

  it("should export categoryDeleteMutation", () => {
    expect(categoryDeleteMutation).toBeDefined();
  });

  it("should export categoryUpdateMutation", () => {
    expect(categoryUpdateMutation).toBeDefined();
  });
});
