import {
  getInitialMenuItemLabel,
  getInitialMenuItemValue,
  getMenuItemCreateInputData,
  getMenuItemInputData,
  getMoves,
  getRemoveIds,
} from "./utils";

describe("structures/views/MenuDetails/utils", () => {
  describe("getMenuItemInputData", () => {
    it("should return category input", () => {
      const data = { name: "Test", linkType: "category", linkValue: "cat-1" } as any;
      const result = getMenuItemInputData(data);

      expect(result.name).toBe("Test");
      expect(result.category).toBe("cat-1");
    });

    it("should return collection input", () => {
      const data = { name: "Test", linkType: "collection", linkValue: "col-1" } as any;
      const result = getMenuItemInputData(data);

      expect(result.collection).toBe("col-1");
    });

    it("should return page input", () => {
      const data = { name: "Test", linkType: "page", linkValue: "page-1" } as any;
      const result = getMenuItemInputData(data);

      expect(result.page).toBe("page-1");
    });

    it("should return link input", () => {
      const data = { name: "Test", linkType: "link", linkValue: "http://example.com" } as any;
      const result = getMenuItemInputData(data);

      expect(result.url).toBe("http://example.com");
    });

    it("should throw for unknown type", () => {
      const data = { name: "Test", linkType: "unknown", linkValue: "" } as any;

      expect(() => getMenuItemInputData(data)).toThrow();
    });
  });

  describe("getMenuItemCreateInputData", () => {
    it("should return category create input with menu id", () => {
      const data = { name: "Test", linkType: "category", linkValue: "cat-1" } as any;
      const result = getMenuItemCreateInputData("menu-1", data);

      expect(result.menu).toBe("menu-1");
      expect(result.name).toBe("Test");
      expect(result.category).toBe("cat-1");
    });

    it("should return collection create input", () => {
      const data = { name: "Test", linkType: "collection", linkValue: "col-1" } as any;
      const result = getMenuItemCreateInputData("menu-1", data);

      expect(result.collection).toBe("col-1");
    });

    it("should return page create input", () => {
      const data = { name: "Test", linkType: "page", linkValue: "page-1" } as any;
      const result = getMenuItemCreateInputData("menu-1", data);

      expect(result.page).toBe("page-1");
    });

    it("should return link create input", () => {
      const data = { name: "Test", linkType: "link", linkValue: "http://example.com" } as any;
      const result = getMenuItemCreateInputData("menu-1", data);

      expect(result.url).toBe("http://example.com");
    });

    it("should throw for unknown type", () => {
      const data = { name: "Test", linkType: "unknown", linkValue: "" } as any;

      expect(() => getMenuItemCreateInputData("menu-1", data)).toThrow();
    });
  });

  describe("getInitialMenuItemValue", () => {
    it("should return '...' for null item", () => {
      expect(getInitialMenuItemValue(null as any)).toBe("...");
    });

    it("should return category id", () => {
      const item = { category: { id: "cat-1" } } as any;

      expect(getInitialMenuItemValue(item)).toBe("cat-1");
    });

    it("should return collection id", () => {
      const item = { collection: { id: "col-1" } } as any;

      expect(getInitialMenuItemValue(item)).toBe("col-1");
    });

    it("should return page id", () => {
      const item = { page: { id: "page-1" } } as any;

      expect(getInitialMenuItemValue(item)).toBe("page-1");
    });

    it("should return url", () => {
      const item = { url: "http://example.com" } as any;

      expect(getInitialMenuItemValue(item)).toBe("http://example.com");
    });

    it("should return empty string for item with no link", () => {
      const item = {} as any;

      expect(getInitialMenuItemValue(item)).toBe("");
    });
  });

  describe("getInitialMenuItemLabel", () => {
    it("should return '...' for null item", () => {
      expect(getInitialMenuItemLabel(null as any)).toBe("...");
    });

    it("should return category name", () => {
      const item = { category: { name: "Category 1" } } as any;

      expect(getInitialMenuItemLabel(item)).toBe("Category 1");
    });

    it("should return collection name", () => {
      const item = { collection: { name: "Collection 1" } } as any;

      expect(getInitialMenuItemLabel(item)).toBe("Collection 1");
    });

    it("should return page title", () => {
      const item = { page: { title: "Page 1" } } as any;

      expect(getInitialMenuItemLabel(item)).toBe("Page 1");
    });

    it("should return url", () => {
      const item = { url: "http://example.com" } as any;

      expect(getInitialMenuItemLabel(item)).toBe("http://example.com");
    });

    it("should return empty string for item with no link", () => {
      const item = {} as any;

      expect(getInitialMenuItemLabel(item)).toBe("");
    });
  });

  describe("getMoves", () => {
    it("should filter and map move operations", () => {
      const data = {
        operations: [
          { type: "move", id: "item-1", parentId: "parent-1", sortOrder: 0 },
          { type: "remove", id: "item-2" },
          { type: "move", id: "item-3", parentId: null, sortOrder: 1 },
        ],
      } as any;
      const result = getMoves(data);

      expect(result).toEqual([
        { itemId: "item-1", parentId: "parent-1", sortOrder: 0 },
        { itemId: "item-3", parentId: null, sortOrder: 1 },
      ]);
    });
  });

  describe("getRemoveIds", () => {
    it("should filter and return remove operation ids", () => {
      const data = {
        operations: [
          { type: "move", id: "item-1" },
          { type: "remove", id: "item-2" },
          { type: "remove", id: "item-3" },
        ],
      } as any;
      const result = getRemoveIds(data);

      expect(result).toEqual(["item-2", "item-3"]);
    });
  });
});
