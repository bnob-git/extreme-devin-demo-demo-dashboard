import {
  baseMessages,
  multipleWithItemsMessages,
  multipleWithoutItemsMessages,
  singleWithItemsMessages,
  singleWithoutItemsMessages,
} from "./messages";

describe("productTypes/hooks/useProductTypeDelete/messages.ts", () => {
  it("should export baseMessages", () => {
    expect(baseMessages).toBeDefined();
  });

  it("should export multipleWithItemsMessages", () => {
    expect(multipleWithItemsMessages).toBeDefined();
  });

  it("should export multipleWithoutItemsMessages", () => {
    expect(multipleWithoutItemsMessages).toBeDefined();
  });

  it("should export singleWithItemsMessages", () => {
    expect(singleWithItemsMessages).toBeDefined();
  });

  it("should export singleWithoutItemsMessages", () => {
    expect(singleWithoutItemsMessages).toBeDefined();
  });
});
