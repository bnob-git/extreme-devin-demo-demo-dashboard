import { AttributeInputTypeEnum } from "@dashboard/graphql";

import {
  createAttributeChangeHandler,
  createAttributeFileChangeHandler,
  createAttributeMultiChangeHandler,
  createAttributeReferenceAdditionalDataHandler,
  createAttributeReferenceChangeHandler,
  createAttributeValueReorderHandler,
  createFetchMoreReferencesHandler,
  createFetchReferencesHandler,
  prepareAttributesInput,
} from "./handlers";

describe("attributes/utils/handlers manual tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("createAttributeChangeHandler", () => {
    it("handles boolean attribute change", () => {
      const change = jest.fn();
      const get = jest.fn().mockReturnValue({
        data: { inputType: AttributeInputTypeEnum.BOOLEAN },
      });
      const triggerChange = jest.fn();
      const formData = { change, get, data: [], setAdditionalData: jest.fn() } as any;

      const handler = createAttributeChangeHandler(formData, triggerChange);

      handler("attr1", true);

      expect(triggerChange).toHaveBeenCalled();
      expect(change).toHaveBeenCalledWith("attr1", [true]);
    });

    it("handles non-boolean attribute with value", () => {
      const change = jest.fn();
      const get = jest.fn().mockReturnValue({
        data: { inputType: AttributeInputTypeEnum.DROPDOWN },
      });
      const triggerChange = jest.fn();
      const formData = { change, get, data: [], setAdditionalData: jest.fn() } as any;

      const handler = createAttributeChangeHandler(formData, triggerChange);

      handler("attr1", "value1");

      expect(triggerChange).toHaveBeenCalled();
      expect(change).toHaveBeenCalledWith("attr1", ["value1"]);
    });

    it("handles non-boolean attribute with empty value", () => {
      const change = jest.fn();
      const get = jest.fn().mockReturnValue({
        data: { inputType: AttributeInputTypeEnum.DROPDOWN },
      });
      const triggerChange = jest.fn();
      const formData = { change, get, data: [], setAdditionalData: jest.fn() } as any;

      const handler = createAttributeChangeHandler(formData, triggerChange);

      handler("attr1", "");

      expect(change).toHaveBeenCalledWith("attr1", []);
    });
  });

  describe("createAttributeMultiChangeHandler", () => {
    it("handles array value", () => {
      const changeData = jest.fn();
      const triggerChange = jest.fn();
      const attributes = [{ id: "attr1", value: ["a", "b"] }] as any;

      const handler = createAttributeMultiChangeHandler(changeData, attributes, triggerChange);

      handler("attr1", ["x", "y"]);

      expect(triggerChange).toHaveBeenCalled();
      expect(changeData).toHaveBeenCalledWith("attr1", ["x", "y"]);
    });

    it("toggles string value", () => {
      const changeData = jest.fn();
      const triggerChange = jest.fn();
      const attributes = [{ id: "attr1", value: ["a", "b"] }] as any;

      const handler = createAttributeMultiChangeHandler(changeData, attributes, triggerChange);

      handler("attr1", "c");

      expect(triggerChange).toHaveBeenCalled();
      expect(changeData).toHaveBeenCalledWith("attr1", ["a", "b", "c"]);
    });

    it("removes existing value on toggle", () => {
      const changeData = jest.fn();
      const triggerChange = jest.fn();
      const attributes = [{ id: "attr1", value: ["a", "b"] }] as any;

      const handler = createAttributeMultiChangeHandler(changeData, attributes, triggerChange);

      handler("attr1", "a");

      expect(changeData).toHaveBeenCalledWith("attr1", ["b"]);
    });
  });

  describe("createAttributeReferenceChangeHandler", () => {
    it("updates references and syncs additional data", () => {
      const change = jest.fn();
      const setAdditionalData = jest.fn();
      const triggerChange = jest.fn();
      const attributes = {
        change,
        setAdditionalData,
        data: [
          {
            id: "attr1",
            additionalData: [
              { value: "ref1", label: "Ref 1" },
              { value: "ref2", label: "Ref 2" },
            ],
          },
        ],
      } as any;

      const handler = createAttributeReferenceChangeHandler(attributes, triggerChange);

      handler("attr1", ["ref1"]);

      expect(change).toHaveBeenCalledWith("attr1", ["ref1"]);
      expect(setAdditionalData).toHaveBeenCalled();
      expect(triggerChange).toHaveBeenCalled();
    });
  });

  describe("createAttributeReferenceAdditionalDataHandler", () => {
    it("merges additional data and filters by current values", () => {
      const setAdditionalData = jest.fn();
      const triggerChange = jest.fn();
      const attributes = {
        setAdditionalData,
        data: [{ id: "attr1", value: ["ref1", "ref2"] }],
      } as any;

      const handler = createAttributeReferenceAdditionalDataHandler(attributes, triggerChange);

      handler("attr1", [{ value: "ref1", label: "Ref 1" }]);

      expect(setAdditionalData).toHaveBeenCalled();
      expect(triggerChange).toHaveBeenCalled();
    });
  });

  describe("createFetchReferencesHandler", () => {
    it("fetches pages for PAGE entity type", () => {
      const fetchPages = jest.fn();
      const attributes = [
        {
          id: "attr1",
          data: { entityType: "PAGE" },
        },
      ] as any;

      const handler = createFetchReferencesHandler(attributes, "attr1", fetchPages);

      handler("search");

      expect(fetchPages).toHaveBeenCalledWith("search");
    });

    it("fetches products for PRODUCT entity type", () => {
      const fetchProducts = jest.fn();
      const attributes = [
        {
          id: "attr1",
          data: { entityType: "PRODUCT" },
        },
      ] as any;

      const handler = createFetchReferencesHandler(attributes, "attr1", undefined, fetchProducts);

      handler("search");

      expect(fetchProducts).toHaveBeenCalledWith("search");
    });

    it("fetches categories for CATEGORY entity type", () => {
      const fetchCategories = jest.fn();
      const attributes = [
        {
          id: "attr1",
          data: { entityType: "CATEGORY" },
        },
      ] as any;

      const handler = createFetchReferencesHandler(
        attributes,
        "attr1",
        undefined,
        undefined,
        fetchCategories,
      );

      handler("search");

      expect(fetchCategories).toHaveBeenCalledWith("search");
    });

    it("fetches collections for COLLECTION entity type", () => {
      const fetchCollections = jest.fn();
      const attributes = [
        {
          id: "attr1",
          data: { entityType: "COLLECTION" },
        },
      ] as any;

      const handler = createFetchReferencesHandler(
        attributes,
        "attr1",
        undefined,
        undefined,
        undefined,
        fetchCollections,
      );

      handler("search");

      expect(fetchCollections).toHaveBeenCalledWith("search");
    });

    it("returns early if attribute not found", () => {
      const fetchPages = jest.fn();
      const attributes = [] as any;

      const handler = createFetchReferencesHandler(attributes, "missing", fetchPages);

      handler("search");

      expect(fetchPages).not.toHaveBeenCalled();
    });

    it("fetches products for PRODUCT_VARIANT entity type", () => {
      const fetchProducts = jest.fn();
      const attributes = [
        {
          id: "attr1",
          data: { entityType: "PRODUCT_VARIANT" },
        },
      ] as any;

      const handler = createFetchReferencesHandler(attributes, "attr1", undefined, fetchProducts);

      handler("search");

      expect(fetchProducts).toHaveBeenCalledWith("search");
    });
  });

  describe("createFetchMoreReferencesHandler", () => {
    it("returns fetchMoreReferencePages for PAGE type", () => {
      const fetchMore = { hasMore: true, loading: false, onFetchMore: jest.fn() } as any;
      const attributes = [
        {
          id: "attr1",
          data: { entityType: "PAGE" },
        },
      ] as any;

      const result = createFetchMoreReferencesHandler(attributes, "attr1", fetchMore);

      expect(result).toBe(fetchMore);
    });

    it("returns fetchMoreReferenceCollections for COLLECTION type", () => {
      const fetchMore = { hasMore: true } as any;
      const attributes = [
        {
          id: "attr1",
          data: { entityType: "COLLECTION" },
        },
      ] as any;

      const result = createFetchMoreReferencesHandler(
        attributes,
        "attr1",
        undefined,
        undefined,
        undefined,
        fetchMore,
      );

      expect(result).toBe(fetchMore);
    });

    it("returns fetchMoreReferenceCategories for CATEGORY type", () => {
      const fetchMore = { hasMore: true } as any;
      const attributes = [
        {
          id: "attr1",
          data: { entityType: "CATEGORY" },
        },
      ] as any;

      const result = createFetchMoreReferencesHandler(
        attributes,
        "attr1",
        undefined,
        undefined,
        fetchMore,
      );

      expect(result).toBe(fetchMore);
    });

    it("returns fetchMoreReferenceProducts for PRODUCT type", () => {
      const fetchMore = { hasMore: true } as any;
      const attributes = [
        {
          id: "attr1",
          data: { entityType: "PRODUCT" },
        },
      ] as any;

      const result = createFetchMoreReferencesHandler(attributes, "attr1", undefined, fetchMore);

      expect(result).toBe(fetchMore);
    });

    it("returns undefined for unknown attribute", () => {
      const result = createFetchMoreReferencesHandler([] as any, "missing");

      expect(result).toBeUndefined();
    });
  });

  describe("createAttributeFileChangeHandler", () => {
    it("adds new file value when not previously assigned", () => {
      const changeData = jest.fn();
      const addNewFileValue = jest.fn();
      const changeNewFileValue = jest.fn();
      const triggerChange = jest.fn();
      const file = new File(["content"], "test.txt");

      const handler = createAttributeFileChangeHandler(
        changeData,
        [] as any,
        addNewFileValue,
        changeNewFileValue,
        triggerChange,
      );

      handler("attr1", file);

      expect(triggerChange).toHaveBeenCalled();
      expect(addNewFileValue).toHaveBeenCalled();
      expect(changeData).toHaveBeenCalledWith("attr1", ["test.txt"]);
    });

    it("updates existing file value", () => {
      const changeData = jest.fn();
      const addNewFileValue = jest.fn();
      const changeNewFileValue = jest.fn();
      const triggerChange = jest.fn();
      const file = new File(["content"], "updated.txt");

      const handler = createAttributeFileChangeHandler(
        changeData,
        [{ id: "attr1" }] as any,
        addNewFileValue,
        changeNewFileValue,
        triggerChange,
      );

      handler("attr1", file);

      expect(changeNewFileValue).toHaveBeenCalledWith("attr1", file);
      expect(addNewFileValue).not.toHaveBeenCalled();
    });

    it("handles null file value", () => {
      const changeData = jest.fn();
      const triggerChange = jest.fn();

      const handler = createAttributeFileChangeHandler(
        changeData,
        [] as any,
        jest.fn(),
        jest.fn(),
        triggerChange,
      );

      handler("attr1", null as any);

      expect(changeData).toHaveBeenCalledWith("attr1", []);
    });
  });

  describe("createAttributeValueReorderHandler", () => {
    it("reorders values based on event", () => {
      const changeData = jest.fn();
      const triggerChange = jest.fn();
      const attributes = [{ id: "attr1", value: ["a", "b", "c"] }] as any;

      const handler = createAttributeValueReorderHandler(changeData, attributes, triggerChange);

      handler("attr1", { oldIndex: 0, newIndex: 2 });

      expect(triggerChange).toHaveBeenCalled();
      expect(changeData).toHaveBeenCalled();
    });
  });

  describe("prepareAttributesInput", () => {
    it("handles FILE input type", () => {
      const result = prepareAttributesInput({
        attributes: [
          {
            id: "attr1",
            value: ["file.txt"],
            data: {
              inputType: AttributeInputTypeEnum.FILE,
              isRequired: true,
              selectedValues: [
                { file: { url: "http://example.com/file.txt", contentType: "text/plain" } },
              ],
            },
          },
        ] as any,
        prevAttributes: null,
        updatedFileAttributes: [],
      });

      expect(result).toBeDefined();
      expect(result.length).toBeGreaterThan(0);
    });

    it("handles FILE input type with updated file", () => {
      const result = prepareAttributesInput({
        attributes: [
          {
            id: "attr1",
            value: ["file.txt"],
            data: {
              inputType: AttributeInputTypeEnum.FILE,
              isRequired: false,
              selectedValues: [],
            },
          },
        ] as any,
        prevAttributes: null,
        updatedFileAttributes: [
          { id: "attr1", file: "http://new-file.txt", contentType: "text/plain" },
        ],
      });

      expect(result).toBeDefined();
    });

    it("handles BOOLEAN input type", () => {
      const result = prepareAttributesInput({
        attributes: [
          {
            id: "attr1",
            value: ["true"],
            data: {
              inputType: AttributeInputTypeEnum.BOOLEAN,
              isRequired: false,
              selectedValues: [],
            },
          },
        ] as any,
        prevAttributes: null,
        updatedFileAttributes: [],
      });

      expect(result).toBeDefined();
      expect(result[0]).toHaveProperty("boolean");
    });

    it("handles PLAIN_TEXT input type", () => {
      const result = prepareAttributesInput({
        attributes: [
          {
            id: "attr1",
            value: ["plain text"],
            data: {
              inputType: AttributeInputTypeEnum.PLAIN_TEXT,
              isRequired: false,
              selectedValues: [],
            },
          },
        ] as any,
        prevAttributes: null,
        updatedFileAttributes: [],
      });

      expect(result[0]).toHaveProperty("plainText", "plain text");
    });

    it("handles RICH_TEXT input type", () => {
      const result = prepareAttributesInput({
        attributes: [
          {
            id: "attr1",
            value: ['{"blocks":[]}'],
            data: {
              inputType: AttributeInputTypeEnum.RICH_TEXT,
              isRequired: false,
              selectedValues: [],
            },
          },
        ] as any,
        prevAttributes: null,
        updatedFileAttributes: [],
      });

      expect(result[0]).toHaveProperty("richText");
    });

    it("handles REFERENCE input type", () => {
      const result = prepareAttributesInput({
        attributes: [
          {
            id: "attr1",
            value: ["ref1", "ref2"],
            data: {
              inputType: AttributeInputTypeEnum.REFERENCE,
              isRequired: false,
              selectedValues: [],
            },
          },
        ] as any,
        prevAttributes: null,
        updatedFileAttributes: [],
      });

      expect(result[0]).toHaveProperty("references", ["ref1", "ref2"]);
    });

    it("handles DATE input type", () => {
      const result = prepareAttributesInput({
        attributes: [
          {
            id: "attr1",
            value: ["2024-01-01"],
            data: {
              inputType: AttributeInputTypeEnum.DATE,
              isRequired: false,
              selectedValues: [],
            },
          },
        ] as any,
        prevAttributes: null,
        updatedFileAttributes: [],
      });

      expect(result[0]).toHaveProperty("date", "2024-01-01");
    });

    it("handles DATE_TIME input type", () => {
      const result = prepareAttributesInput({
        attributes: [
          {
            id: "attr1",
            value: ["2024-01-01T12:00:00"],
            data: {
              inputType: AttributeInputTypeEnum.DATE_TIME,
              isRequired: false,
              selectedValues: [],
            },
          },
        ] as any,
        prevAttributes: null,
        updatedFileAttributes: [],
      });

      expect(result[0]).toHaveProperty("dateTime");
    });

    it("handles SWATCH input type", () => {
      const result = prepareAttributesInput({
        attributes: [
          {
            id: "attr1",
            value: ["#ff0000"],
            data: {
              inputType: AttributeInputTypeEnum.SWATCH,
              isRequired: false,
              selectedValues: [],
            },
          },
        ] as any,
        prevAttributes: null,
        updatedFileAttributes: [],
      });

      expect(result[0]).toHaveProperty("swatch");
    });

    it("handles NUMERIC input type", () => {
      const result = prepareAttributesInput({
        attributes: [
          {
            id: "attr1",
            value: ["42"],
            data: {
              inputType: AttributeInputTypeEnum.NUMERIC,
              isRequired: false,
              selectedValues: [],
            },
          },
        ] as any,
        prevAttributes: null,
        updatedFileAttributes: [],
      });

      expect(result[0]).toHaveProperty("values", ["42"]);
    });

    it("handles NUMERIC with empty value", () => {
      const result = prepareAttributesInput({
        attributes: [
          {
            id: "attr1",
            value: [undefined],
            data: {
              inputType: AttributeInputTypeEnum.NUMERIC,
              isRequired: false,
              selectedValues: [],
            },
          },
        ] as any,
        prevAttributes: null,
        updatedFileAttributes: [],
      });

      expect(result[0]).toHaveProperty("values", []);
    });

    it("handles DROPDOWN input type", () => {
      const result = prepareAttributesInput({
        attributes: [
          {
            id: "attr1",
            value: ["option1", null],
            data: {
              inputType: AttributeInputTypeEnum.DROPDOWN,
              isRequired: false,
              selectedValues: [],
            },
          },
        ] as any,
        prevAttributes: null,
        updatedFileAttributes: [],
      });

      expect(result[0]).toHaveProperty("values", ["option1"]);
    });

    it("handles SINGLE_REFERENCE input type", () => {
      const result = prepareAttributesInput({
        attributes: [
          {
            id: "attr1",
            value: ["ref1"],
            data: {
              inputType: "SINGLE_REFERENCE" as any,
              isRequired: false,
              selectedValues: [],
            },
          },
        ] as any,
        prevAttributes: null,
        updatedFileAttributes: [],
      });

      expect(result[0]).toHaveProperty("reference", "ref1");
    });

    it("skips unchanged non-required attributes", () => {
      const result = prepareAttributesInput({
        attributes: [
          {
            id: "attr1",
            value: ["same"],
            data: {
              inputType: AttributeInputTypeEnum.DROPDOWN,
              isRequired: false,
              selectedValues: [],
            },
          },
        ] as any,
        prevAttributes: [
          {
            id: "attr1",
            value: ["same"],
            data: {
              inputType: AttributeInputTypeEnum.DROPDOWN,
              isRequired: false,
              selectedValues: [],
            },
          },
        ] as any,
        updatedFileAttributes: [],
      });

      expect(result).toHaveLength(0);
    });

    it("includes unchanged required attributes", () => {
      const result = prepareAttributesInput({
        attributes: [
          {
            id: "attr1",
            value: ["same"],
            data: {
              inputType: AttributeInputTypeEnum.DROPDOWN,
              isRequired: true,
              selectedValues: [],
            },
          },
        ] as any,
        prevAttributes: [
          {
            id: "attr1",
            value: ["same"],
            data: {
              inputType: AttributeInputTypeEnum.DROPDOWN,
              isRequired: true,
              selectedValues: [],
            },
          },
        ] as any,
        updatedFileAttributes: [],
      });

      expect(result.length).toBeGreaterThan(0);
    });

    it("falls through to default for unknown types", () => {
      const result = prepareAttributesInput({
        attributes: [
          {
            id: "attr1",
            value: ["val1", "val2"],
            data: {
              inputType: AttributeInputTypeEnum.MULTISELECT,
              isRequired: false,
              selectedValues: [],
            },
          },
        ] as any,
        prevAttributes: null,
        updatedFileAttributes: [],
      });

      expect(result[0]).toHaveProperty("values", ["val1", "val2"]);
    });
  });
});
