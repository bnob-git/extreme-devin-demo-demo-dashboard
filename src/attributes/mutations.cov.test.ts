import {
  attributeBulkDelete,
  attributeCreateMutation,
  attributeDelete,
  attributeUpdateMutation,
  attributeValueCreateMutation,
  attributeValueDelete,
  attributeValueReorderMutation,
  attributeValueUpdateMutation,
} from "./mutations";

describe("attributes/mutations.ts", () => {
  it("should export attributeBulkDelete", () => {
    expect(attributeBulkDelete).toBeDefined();
  });

  it("should export attributeCreateMutation", () => {
    expect(attributeCreateMutation).toBeDefined();
  });

  it("should export attributeDelete", () => {
    expect(attributeDelete).toBeDefined();
  });

  it("should export attributeUpdateMutation", () => {
    expect(attributeUpdateMutation).toBeDefined();
  });

  it("should export attributeValueCreateMutation", () => {
    expect(attributeValueCreateMutation).toBeDefined();
  });

  it("should export attributeValueDelete", () => {
    expect(attributeValueDelete).toBeDefined();
  });

  it("should export attributeValueReorderMutation", () => {
    expect(attributeValueReorderMutation).toBeDefined();
  });

  it("should export attributeValueUpdateMutation", () => {
    expect(attributeValueUpdateMutation).toBeDefined();
  });
});
