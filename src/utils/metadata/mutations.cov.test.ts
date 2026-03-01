import { updateMetadata, updatePrivateMetadata } from "./mutations";

describe("utils/metadata/mutations.ts", () => {
  it("should export updateMetadata", () => {
    expect(updateMetadata).toBeDefined();
  });

  it("should export updatePrivateMetadata", () => {
    expect(updatePrivateMetadata).toBeDefined();
  });
});
