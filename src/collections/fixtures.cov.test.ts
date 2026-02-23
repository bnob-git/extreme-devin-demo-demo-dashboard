import { collection, collectionListFilterOpts, collections } from "./fixtures";

describe("collections/fixtures.ts", () => {
  it("should export collection", () => {
    expect(collection).toBeDefined();
  });

  it("should export collectionListFilterOpts", () => {
    expect(collectionListFilterOpts).toBeDefined();
  });

  it("should export collections", () => {
    expect(collections).toBeDefined();
  });
});
