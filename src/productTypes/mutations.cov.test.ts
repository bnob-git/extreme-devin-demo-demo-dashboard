import {
  assignProductAttributeMutation,
  productAttributeAssignmentUpdate,
  productTypeAttributeReorder,
  productTypeBulkDeleteMutation,
  productTypeCreateMutation,
  productTypeDeleteMutation,
  productTypeUpdateMutation,
  unassignProductAttributeMutation,
} from "./mutations";

describe("productTypes/mutations.ts", () => {
  it("should export assignProductAttributeMutation", () => {
    expect(assignProductAttributeMutation).toBeDefined();
  });

  it("should export productAttributeAssignmentUpdate", () => {
    expect(productAttributeAssignmentUpdate).toBeDefined();
  });

  it("should export productTypeAttributeReorder", () => {
    expect(productTypeAttributeReorder).toBeDefined();
  });

  it("should export productTypeBulkDeleteMutation", () => {
    expect(productTypeBulkDeleteMutation).toBeDefined();
  });

  it("should export productTypeCreateMutation", () => {
    expect(productTypeCreateMutation).toBeDefined();
  });

  it("should export productTypeDeleteMutation", () => {
    expect(productTypeDeleteMutation).toBeDefined();
  });

  it("should export productTypeUpdateMutation", () => {
    expect(productTypeUpdateMutation).toBeDefined();
  });

  it("should export unassignProductAttributeMutation", () => {
    expect(unassignProductAttributeMutation).toBeDefined();
  });
});
