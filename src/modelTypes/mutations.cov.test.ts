import {
  assignPageAttributeMutation,
  pageTypeAttributeReorder,
  pageTypeBulkDeleteMutation,
  pageTypeCreateMutation,
  pageTypeDeleteMutation,
  pageTypeUpdateMutation,
  unassignPageAttributeMutation,
} from "./mutations";

describe("modelTypes/mutations.ts", () => {
  it("should export assignPageAttributeMutation", () => {
    expect(assignPageAttributeMutation).toBeDefined();
  });

  it("should export pageTypeAttributeReorder", () => {
    expect(pageTypeAttributeReorder).toBeDefined();
  });

  it("should export pageTypeBulkDeleteMutation", () => {
    expect(pageTypeBulkDeleteMutation).toBeDefined();
  });

  it("should export pageTypeCreateMutation", () => {
    expect(pageTypeCreateMutation).toBeDefined();
  });

  it("should export pageTypeDeleteMutation", () => {
    expect(pageTypeDeleteMutation).toBeDefined();
  });

  it("should export pageTypeUpdateMutation", () => {
    expect(pageTypeUpdateMutation).toBeDefined();
  });

  it("should export unassignPageAttributeMutation", () => {
    expect(unassignPageAttributeMutation).toBeDefined();
  });
});
