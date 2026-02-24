import {
  assignCollectionProduct,
  collectionBulkDelete,
  collectionChannelListingUpdate,
  collectionUpdate,
  createCollection,
  removeCollection,
  reorderProductsInCollection,
  unassignCollectionProduct,
} from "./mutations";

describe("collections/mutations.ts", () => {
  it("should export assignCollectionProduct", () => {
    expect(assignCollectionProduct).toBeDefined();
  });

  it("should export collectionBulkDelete", () => {
    expect(collectionBulkDelete).toBeDefined();
  });

  it("should export collectionChannelListingUpdate", () => {
    expect(collectionChannelListingUpdate).toBeDefined();
  });

  it("should export collectionUpdate", () => {
    expect(collectionUpdate).toBeDefined();
  });

  it("should export createCollection", () => {
    expect(createCollection).toBeDefined();
  });

  it("should export removeCollection", () => {
    expect(removeCollection).toBeDefined();
  });

  it("should export reorderProductsInCollection", () => {
    expect(reorderProductsInCollection).toBeDefined();
  });

  it("should export unassignCollectionProduct", () => {
    expect(unassignCollectionProduct).toBeDefined();
  });
});
