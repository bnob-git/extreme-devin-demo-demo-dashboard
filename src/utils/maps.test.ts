import { AttributeEntityTypeEnum } from "@dashboard/graphql";

import {
  getEntityUrl,
  getLoadableList,
  mapCountriesToChoices,
  mapCountriesToCountriesCodes,
  mapEdgesToItems,
  mapMetadataItemToInput,
  mapMultiValueNodeToChoice,
  mapNodeToChoice,
  mapSingleValueNodeToChoice,
  mapSlugNodeToChoice,
} from "./maps";

describe("maps", () => {
  describe("mapEdgesToItems", () => {
    it("should return undefined for undefined input", () => {
      expect(mapEdgesToItems(undefined)).toBeUndefined();
    });

    it("should return undefined for null input", () => {
      expect(mapEdgesToItems(null)).toBeUndefined();
    });

    it("should map edges to nodes", () => {
      const data = {
        edges: [{ node: { id: "1" } }, { node: { id: "2" } }],
      };

      expect(mapEdgesToItems(data)).toEqual([{ id: "1" }, { id: "2" }]);
    });

    it("should handle empty edges", () => {
      const data = { edges: [] };

      expect(mapEdgesToItems(data)).toEqual([]);
    });

    it("should handle null edges", () => {
      const data = { edges: null };

      expect(mapEdgesToItems(data)).toBeUndefined();
    });
  });

  describe("mapCountriesToCountriesCodes", () => {
    it("should map countries to codes", () => {
      const countries = [{ code: "US" }, { code: "GB" }];

      expect(mapCountriesToCountriesCodes(countries)).toEqual(["US", "GB"]);
    });

    it("should return undefined for undefined", () => {
      expect(mapCountriesToCountriesCodes(undefined)).toBeUndefined();
    });
  });

  describe("mapCountriesToChoices", () => {
    it("should map countries to choices", () => {
      const countries = [
        { country: "United States", code: "US" },
        { country: "United Kingdom", code: "GB" },
      ] as any;
      const result = mapCountriesToChoices(countries);

      expect(result).toEqual([
        { label: "United States", value: "US" },
        { label: "United Kingdom", value: "GB" },
      ]);
    });
  });

  describe("mapNodeToChoice", () => {
    it("should map nodes to choices using name and id", () => {
      const nodes = [
        { id: "1", name: "Item 1" },
        { id: "2", name: "Item 2" },
      ];

      expect(mapNodeToChoice(nodes)).toEqual([
        { label: "Item 1", value: "1" },
        { label: "Item 2", value: "2" },
      ]);
    });

    it("should return empty array for falsy input", () => {
      expect(mapNodeToChoice(null as any)).toEqual([]);
    });

    it("should use getter function when provided", () => {
      const nodes = [
        { id: "1", name: "Item 1", slug: "item-1" },
        { id: "2", name: "Item 2", slug: "item-2" },
      ];

      expect(mapNodeToChoice(nodes, node => node.slug)).toEqual([
        { label: "Item 1", value: "item-1" },
        { label: "Item 2", value: "item-2" },
      ]);
    });
  });

  describe("mapSlugNodeToChoice", () => {
    it("should map nodes to choices using slug as value", () => {
      const nodes = [
        { id: "1", name: "Item 1", slug: "item-1" },
        { id: "2", name: "Item 2", slug: "item-2" },
      ];

      expect(mapSlugNodeToChoice(nodes)).toEqual([
        { label: "Item 1", value: "item-1" },
        { label: "Item 2", value: "item-2" },
      ]);
    });
  });

  describe("mapMetadataItemToInput", () => {
    it("should map metadata item to input", () => {
      const item = { key: "test-key", value: "test-value", __typename: "MetadataItem" as const };

      expect(mapMetadataItemToInput(item)).toEqual({
        key: "test-key",
        value: "test-value",
      });
    });
  });

  describe("mapMultiValueNodeToChoice", () => {
    it("should return empty array for falsy input", () => {
      expect(mapMultiValueNodeToChoice(null as any)).toEqual([]);
    });

    it("should map string array to choices", () => {
      expect(mapMultiValueNodeToChoice(["a", "b"])).toEqual([
        { label: "a", value: "a" },
        { label: "b", value: "b" },
      ]);
    });

    it("should return empty array for objects without key", () => {
      expect(mapMultiValueNodeToChoice([{ name: "a" }])).toEqual([]);
    });

    it("should map objects with key to choices", () => {
      expect(mapMultiValueNodeToChoice([{ name: "a" }, { name: "b" }], "name")).toEqual([
        { label: "a", value: "a" },
        { label: "b", value: "b" },
      ]);
    });
  });

  describe("mapSingleValueNodeToChoice", () => {
    it("should return empty array for falsy input", () => {
      expect(mapSingleValueNodeToChoice(null as any)).toEqual([]);
    });

    it("should map string array to choices", () => {
      expect(mapSingleValueNodeToChoice(["x", "y"])).toEqual([
        { label: "x", value: "x" },
        { label: "y", value: "y" },
      ]);
    });

    it("should return empty array for objects without key", () => {
      expect(mapSingleValueNodeToChoice([{ name: "a" }])).toEqual([]);
    });

    it("should map objects with key to choices", () => {
      expect(mapSingleValueNodeToChoice([{ slug: "a" }, { slug: "b" }], "slug")).toEqual([
        { label: "a", value: "a" },
        { label: "b", value: "b" },
      ]);
    });
  });

  describe("getLoadableList", () => {
    it("should return undefined for undefined data (loading state)", () => {
      expect(getLoadableList(undefined)).toBeUndefined();
    });

    it("should return empty array for null data", () => {
      expect(getLoadableList(null)).toEqual([]);
    });

    it("should return mapped items", () => {
      const data = { edges: [{ node: { id: "1" } }] };

      expect(getLoadableList(data)).toEqual([{ id: "1" }]);
    });

    it("should return empty array when edges is null", () => {
      const data = { edges: null };

      expect(getLoadableList(data)).toEqual([]);
    });
  });

  describe("getEntityUrl", () => {
    it("should return undefined for no entity type", () => {
      expect(getEntityUrl({ entityType: null, entityId: "1" })).toBeUndefined();
    });

    it("should return undefined for no entity id", () => {
      expect(
        getEntityUrl({ entityType: AttributeEntityTypeEnum.PRODUCT, entityId: "" }),
      ).toBeUndefined();
    });

    it("should return category url", () => {
      const result = getEntityUrl({
        entityType: AttributeEntityTypeEnum.CATEGORY,
        entityId: "cat-1",
      });

      expect(result).toContain("cat-1");
    });

    it("should return collection url", () => {
      const result = getEntityUrl({
        entityType: AttributeEntityTypeEnum.COLLECTION,
        entityId: "col-1",
      });

      expect(result).toContain("col-1");
    });

    it("should return page url", () => {
      const result = getEntityUrl({
        entityType: AttributeEntityTypeEnum.PAGE,
        entityId: "page-1",
      });

      expect(result).toContain("page-1");
    });

    it("should return product url", () => {
      const result = getEntityUrl({
        entityType: AttributeEntityTypeEnum.PRODUCT,
        entityId: "prod-1",
      });

      expect(result).toContain("prod-1");
    });

    it("should return product variant url", () => {
      const result = getEntityUrl({
        entityType: AttributeEntityTypeEnum.PRODUCT_VARIANT,
        entityId: "var-1",
      });

      expect(result).toContain("var-1");
    });
  });
});
