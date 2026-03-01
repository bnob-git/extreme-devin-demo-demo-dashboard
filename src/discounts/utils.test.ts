import {
  getFilteredCategories,
  getFilteredCollections,
  getFilteredProducts,
  getFilteredProductVariants,
  sortAPIRules,
  sortRules,
} from "./utils";

describe("discounts/utils", () => {
  describe("getFilteredCategories", () => {
    it("should return categories when no criteria", () => {
      const searchOpts = {
        data: {
          search: {
            edges: [
              { node: { id: "cat-1", name: "Cat 1" } },
              { node: { id: "cat-2", name: "Cat 2" } },
            ],
          },
        },
      } as any;
      const result = getFilteredCategories(null as any, searchOpts);

      expect(result).toEqual([
        { id: "cat-1", name: "Cat 1" },
        { id: "cat-2", name: "Cat 2" },
      ]);
    });

    it("should filter out already assigned categories (sale)", () => {
      const data = {
        sale: {
          categories: {
            edges: [{ node: { id: "cat-1" } }],
          },
        },
      } as any;
      const searchOpts = {
        data: {
          search: {
            edges: [
              { node: { id: "cat-1", name: "Cat 1" } },
              { node: { id: "cat-2", name: "Cat 2" } },
            ],
          },
        },
      } as any;
      const result = getFilteredCategories(data, searchOpts);

      expect(result).toEqual([{ id: "cat-2", name: "Cat 2" }]);
    });

    it("should filter out already assigned categories (voucher)", () => {
      const data = {
        voucher: {
          categories: {
            edges: [{ node: { id: "cat-2" } }],
          },
        },
      } as any;
      const searchOpts = {
        data: {
          search: {
            edges: [
              { node: { id: "cat-1", name: "Cat 1" } },
              { node: { id: "cat-2", name: "Cat 2" } },
            ],
          },
        },
      } as any;
      const result = getFilteredCategories(data, searchOpts);

      expect(result).toEqual([{ id: "cat-1", name: "Cat 1" }]);
    });

    it("should return all when no categories edges in criteria", () => {
      const data = { sale: {} } as any;
      const searchOpts = {
        data: {
          search: {
            edges: [{ node: { id: "cat-1", name: "Cat 1" } }],
          },
        },
      } as any;
      const result = getFilteredCategories(data, searchOpts);

      expect(result).toEqual([{ id: "cat-1", name: "Cat 1" }]);
    });
  });

  describe("getFilteredCollections", () => {
    it("should return collections when no criteria", () => {
      const searchOpts = {
        data: {
          search: {
            edges: [{ node: { id: "col-1", name: "Col 1" } }],
          },
        },
      } as any;
      const result = getFilteredCollections(null as any, searchOpts);

      expect(result).toEqual([{ id: "col-1", name: "Col 1" }]);
    });

    it("should filter out already assigned collections", () => {
      const data = {
        sale: {
          collections: {
            edges: [{ node: { id: "col-1" } }],
          },
        },
      } as any;
      const searchOpts = {
        data: {
          search: {
            edges: [
              { node: { id: "col-1", name: "Col 1" } },
              { node: { id: "col-2", name: "Col 2" } },
            ],
          },
        },
      } as any;
      const result = getFilteredCollections(data, searchOpts);

      expect(result).toEqual([{ id: "col-2", name: "Col 2" }]);
    });
  });

  describe("getFilteredProducts", () => {
    it("should return products when no criteria", () => {
      const searchOpts = {
        data: {
          search: {
            edges: [{ node: { id: "prod-1", name: "Prod 1" } }],
          },
        },
      } as any;
      const result = getFilteredProducts(null as any, searchOpts);

      expect(result).toEqual([{ id: "prod-1", name: "Prod 1" }]);
    });

    it("should filter out already assigned products", () => {
      const data = {
        sale: {
          products: {
            edges: [{ node: { id: "prod-1" } }],
          },
        },
      } as any;
      const searchOpts = {
        data: {
          search: {
            edges: [
              { node: { id: "prod-1", name: "Prod 1" } },
              { node: { id: "prod-2", name: "Prod 2" } },
            ],
          },
        },
      } as any;
      const result = getFilteredProducts(data, searchOpts);

      expect(result).toEqual([{ id: "prod-2", name: "Prod 2" }]);
    });
  });

  describe("getFilteredProductVariants", () => {
    it("should return products when no variants", () => {
      const searchOpts = {
        data: {
          search: {
            edges: [{ node: { id: "prod-1", name: "Prod 1", variants: [{ id: "var-1" }] } }],
          },
        },
      } as any;
      const result = getFilteredProductVariants(null, searchOpts);

      expect(result).toEqual([{ id: "prod-1", name: "Prod 1", variants: [{ id: "var-1" }] }]);
    });

    it("should filter out already assigned variants", () => {
      const variants = {
        edges: [{ node: { id: "var-1" } }],
      } as any;
      const searchOpts = {
        data: {
          search: {
            edges: [
              {
                node: {
                  id: "prod-1",
                  name: "Prod 1",
                  variants: [{ id: "var-1" }, { id: "var-2" }],
                },
              },
            ],
          },
        },
      } as any;
      const result = getFilteredProductVariants(variants, searchOpts);

      expect(result![0].variants).toEqual([{ id: "var-2" }]);
    });
  });

  describe("sortRules", () => {
    it("should sort rules alphabetically by name", () => {
      const rules = [{ name: "Banana" }, { name: "Apple" }, { name: "Cherry" }] as any;
      const result = sortRules(rules);

      expect(result[0].name).toBe("Apple");
      expect(result[1].name).toBe("Banana");
      expect(result[2].name).toBe("Cherry");
    });
  });

  describe("sortAPIRules", () => {
    it("should sort API rules alphabetically by name", () => {
      const rules = [{ name: "Zeta" }, { name: "Alpha" }] as any;
      const result = sortAPIRules(rules);

      expect(result[0].name).toBe("Alpha");
      expect(result[1].name).toBe("Zeta");
    });
  });
});
