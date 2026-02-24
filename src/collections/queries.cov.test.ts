import { collectionDetails, collectionList, collectionProducts } from "./queries";

describe("collections/queries.ts", () => {
  it("should export collectionDetails", () => {
    expect(collectionDetails).toBeDefined();
  });

  it("should export collectionList", () => {
    expect(collectionList).toBeDefined();
  });

  it("should export collectionProducts", () => {
    expect(collectionProducts).toBeDefined();
  });
});
