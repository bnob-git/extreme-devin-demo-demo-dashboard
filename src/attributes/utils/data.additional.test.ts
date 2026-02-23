import { AttributeEntityTypeEnum, AttributeInputTypeEnum } from "@dashboard/graphql";

import {
  ATTRIBUTE_TYPES_WITH_CONFIGURABLE_FACED_NAVIGATION,
  ATTRIBUTE_TYPES_WITH_DEDICATED_VALUES,
  attributeValueFragmentToFormData,
  ENTITY_TYPES_WITH_TYPES_RESTRICTION,
  getAttributeData,
  getAttributesAfterFileAttributesUpdate,
  getFileValuesToUploadFromAttributes,
  getReferenceAttributeDisplayData,
  getRichTextAttributesFromMap,
  getRichTextDataFromAttributes,
  getSelectedAttributeValues,
  handleContainerReferenceAssignment,
  handleMetadataReferenceAssignment,
  isFileValueUnused,
  mergeAttributes,
  mergeAttributeValueDeleteErrors,
  mergeAttributeValues,
  mergeChoicesWithValues,
  mergeFileUploadErrors,
  REFERENCE_ATTRIBUTE_TYPES,
} from "./data";

describe("attributes/utils/data additional tests", () => {
  describe("constants", () => {
    it("should have correct ATTRIBUTE_TYPES_WITH_DEDICATED_VALUES", () => {
      expect(ATTRIBUTE_TYPES_WITH_DEDICATED_VALUES).toContain(AttributeInputTypeEnum.DROPDOWN);
      expect(ATTRIBUTE_TYPES_WITH_DEDICATED_VALUES).toContain(AttributeInputTypeEnum.MULTISELECT);
      expect(ATTRIBUTE_TYPES_WITH_DEDICATED_VALUES).toContain(AttributeInputTypeEnum.SWATCH);
    });

    it("should have correct ATTRIBUTE_TYPES_WITH_CONFIGURABLE_FACED_NAVIGATION", () => {
      expect(ATTRIBUTE_TYPES_WITH_CONFIGURABLE_FACED_NAVIGATION).toContain(
        AttributeInputTypeEnum.DROPDOWN,
      );
      expect(ATTRIBUTE_TYPES_WITH_CONFIGURABLE_FACED_NAVIGATION).toContain(
        AttributeInputTypeEnum.BOOLEAN,
      );
      expect(ATTRIBUTE_TYPES_WITH_CONFIGURABLE_FACED_NAVIGATION).toContain(
        AttributeInputTypeEnum.NUMERIC,
      );
    });

    it("should have correct REFERENCE_ATTRIBUTE_TYPES", () => {
      expect(REFERENCE_ATTRIBUTE_TYPES).toContain(AttributeInputTypeEnum.REFERENCE);
      expect(REFERENCE_ATTRIBUTE_TYPES).toContain(AttributeInputTypeEnum.SINGLE_REFERENCE);
    });

    it("should have correct ENTITY_TYPES_WITH_TYPES_RESTRICTION", () => {
      expect(ENTITY_TYPES_WITH_TYPES_RESTRICTION).toContain(AttributeEntityTypeEnum.PRODUCT);
      expect(ENTITY_TYPES_WITH_TYPES_RESTRICTION).toContain(AttributeEntityTypeEnum.PAGE);
    });
  });

  describe("attributeValueFragmentToFormData", () => {
    it("should convert fragment to form data", () => {
      const data = {
        name: "Test",
        value: "#ff0000",
        file: { contentType: "image/png", url: "http://example.com/image.png" },
      } as any;

      const result = attributeValueFragmentToFormData(data);

      expect(result).toEqual({
        name: "Test",
        value: "#ff0000",
        contentType: "image/png",
        fileUrl: "http://example.com/image.png",
      });
    });

    it("should handle null data", () => {
      const result = attributeValueFragmentToFormData(null);

      expect(result).toEqual({
        name: "",
        value: "",
        contentType: "",
        fileUrl: undefined,
      });
    });
  });

  describe("getAttributeData", () => {
    it("should return swatch data for SWATCH inputType", () => {
      const data = {
        inputType: AttributeInputTypeEnum.SWATCH,
        storefrontSearchPosition: "10",
        referenceTypes: [],
      } as any;
      const values = [{ name: "Red", value: "#ff0000" }];

      const result = getAttributeData(data, values);

      expect(result.values[0].name).toBe("Red");
      expect(result.storefrontSearchPosition).toBe(10);
    });

    it("should return simple data for DROPDOWN inputType", () => {
      const data = {
        inputType: AttributeInputTypeEnum.DROPDOWN,
        storefrontSearchPosition: "5",
      } as any;
      const values = [{ name: "Option 1" }];

      const result = getAttributeData(data, values);

      expect(result.values[0].name).toBe("Option 1");
    });

    it("should return simple data for MULTISELECT inputType", () => {
      const data = {
        inputType: AttributeInputTypeEnum.MULTISELECT,
        storefrontSearchPosition: "7",
      } as any;
      const values = [{ name: "A" }, { name: "B" }];

      const result = getAttributeData(data, values);

      expect(result.values).toHaveLength(2);
    });

    it("should return file/reference data for FILE inputType", () => {
      const data = {
        inputType: AttributeInputTypeEnum.FILE,
        storefrontSearchPosition: "3",
        referenceTypes: [],
      } as any;
      const values = [{ name: "file.txt" }];

      const result = getAttributeData(data, values);

      expect(result.values).toEqual([]);
    });

    it("should return file/reference data for REFERENCE inputType", () => {
      const data = {
        inputType: AttributeInputTypeEnum.REFERENCE,
        storefrontSearchPosition: "2",
        referenceTypes: [{ value: "PRODUCT" }],
      } as any;

      const result = getAttributeData(data, []);

      expect(result.values).toEqual([]);
      expect(result.referenceTypes).toEqual(["PRODUCT"]);
    });
  });

  describe("getSelectedAttributeValues", () => {
    it("should return slugs for default inputType", () => {
      const attribute = {
        attribute: { inputType: AttributeInputTypeEnum.DROPDOWN },
        values: [{ slug: "red" }, { slug: "blue" }],
      } as any;

      expect(getSelectedAttributeValues(attribute)).toEqual(["red", "blue"]);
    });

    it("should return references for REFERENCE inputType", () => {
      const attribute = {
        attribute: { inputType: AttributeInputTypeEnum.REFERENCE },
        values: [{ reference: "ref-1" }, { reference: "ref-2" }],
      } as any;

      expect(getSelectedAttributeValues(attribute)).toEqual(["ref-1", "ref-2"]);
    });

    it("should return first reference for SINGLE_REFERENCE", () => {
      const attribute = {
        attribute: { inputType: AttributeInputTypeEnum.SINGLE_REFERENCE },
        values: [{ reference: "ref-1" }],
      } as any;

      expect(getSelectedAttributeValues(attribute)).toEqual(["ref-1"]);
    });

    it("should return plainText for PLAIN_TEXT", () => {
      const attribute = {
        attribute: { inputType: AttributeInputTypeEnum.PLAIN_TEXT },
        values: [{ plainText: "some text" }],
      } as any;

      expect(getSelectedAttributeValues(attribute)).toEqual(["some text"]);
    });

    it("should return richText for RICH_TEXT", () => {
      const attribute = {
        attribute: { inputType: AttributeInputTypeEnum.RICH_TEXT },
        values: [{ richText: '{"blocks":[]}' }],
      } as any;

      expect(getSelectedAttributeValues(attribute)).toEqual(['{"blocks":[]}']);
    });

    it("should return name for NUMERIC", () => {
      const attribute = {
        attribute: { inputType: AttributeInputTypeEnum.NUMERIC },
        values: [{ name: "42" }],
      } as any;

      expect(getSelectedAttributeValues(attribute)).toEqual(["42"]);
    });

    it("should return boolean for BOOLEAN", () => {
      const attribute = {
        attribute: { inputType: AttributeInputTypeEnum.BOOLEAN },
        values: [{ boolean: true }],
      } as any;

      expect(getSelectedAttributeValues(attribute)).toEqual([true]);
    });

    it("should return date for DATE", () => {
      const attribute = {
        attribute: { inputType: AttributeInputTypeEnum.DATE },
        values: [{ date: "2023-01-01" }],
      } as any;

      expect(getSelectedAttributeValues(attribute)).toEqual(["2023-01-01"]);
    });

    it("should return dateTime for DATE_TIME", () => {
      const attribute = {
        attribute: { inputType: AttributeInputTypeEnum.DATE_TIME },
        values: [{ dateTime: "2023-01-01T12:00:00" }],
      } as any;

      expect(getSelectedAttributeValues(attribute)).toEqual(["2023-01-01T12:00:00"]);
    });

    it("should handle empty values for NUMERIC", () => {
      const attribute = {
        attribute: { inputType: AttributeInputTypeEnum.NUMERIC },
        values: [],
      } as any;

      expect(getSelectedAttributeValues(attribute)).toEqual([]);
    });
  });

  describe("isFileValueUnused", () => {
    it("should return false for non-FILE attribute", () => {
      const attr = {
        attribute: { id: "a1", inputType: AttributeInputTypeEnum.DROPDOWN },
        values: [],
      } as any;

      expect(isFileValueUnused([], attr)).toBe(false);
    });

    it("should return false for FILE attribute with no values", () => {
      const attr = {
        attribute: { id: "a1", inputType: AttributeInputTypeEnum.FILE },
        values: [],
      } as any;

      expect(isFileValueUnused([], attr)).toBe(false);
    });

    it("should return true when file attribute has new value", () => {
      const attr = {
        attribute: { id: "a1", inputType: AttributeInputTypeEnum.FILE },
        values: [{ id: "v1" }],
      } as any;
      const filesFormset = [{ id: "a1", value: new File([], "test.txt") }] as any;

      expect(isFileValueUnused(filesFormset, attr)).toBe(true);
    });
  });

  describe("mergeFileUploadErrors", () => {
    it("should merge upload errors from multiple results", () => {
      const results = [
        { data: { fileUpload: { errors: [{ field: "file", message: "Error 1" }] } } },
        { data: { fileUpload: { errors: [] } } },
        { data: { fileUpload: { errors: [{ field: "file", message: "Error 2" }] } } },
      ] as any;
      const errors = mergeFileUploadErrors(results);

      expect(errors).toHaveLength(2);
    });

    it("should return empty array for no errors", () => {
      const results = [{ data: { fileUpload: { errors: [] } } }] as any;

      expect(mergeFileUploadErrors(results)).toEqual([]);
    });

    it("should handle results with null data", () => {
      const results = [{ data: null }] as any;

      expect(mergeFileUploadErrors(results)).toEqual([]);
    });
  });

  describe("mergeAttributeValueDeleteErrors", () => {
    it("should merge delete errors", () => {
      const results = [
        {
          data: { attributeValueDelete: { errors: [{ field: "id", message: "Error" }] } },
        },
      ] as any;

      expect(mergeAttributeValueDeleteErrors(results)).toHaveLength(1);
    });

    it("should handle null delete errors", () => {
      const results = [{ data: { attributeValueDelete: null } }] as any;

      expect(mergeAttributeValueDeleteErrors(results)).toEqual([]);
    });
  });

  describe("mergeChoicesWithValues", () => {
    it("should merge attribute choices with values", () => {
      const attribute = {
        attribute: {
          choices: { edges: [{ node: { id: "c1", name: "Choice 1" } }] },
        },
        values: [{ id: "v1", name: "Value 1" }],
      } as any;

      const result = mergeChoicesWithValues(attribute);

      expect(result).toHaveLength(2);
    });

    it("should not duplicate existing choices", () => {
      const attribute = {
        attribute: {
          choices: { edges: [{ node: { id: "c1", name: "Choice 1" } }] },
        },
        values: [{ id: "c1", name: "Choice 1" }],
      } as any;

      const result = mergeChoicesWithValues(attribute);

      expect(result).toHaveLength(1);
    });
  });

  describe("mergeAttributeValues", () => {
    it("should merge new values with existing", () => {
      const attributes = [{ id: "a1", value: ["existing-val"] }] as any;

      const result = mergeAttributeValues("a1", ["new-val"], attributes);

      expect(result).toEqual(["existing-val", "new-val"]);
    });

    it("should return just new values if attribute not found", () => {
      const result = mergeAttributeValues("a2", ["new-val"], []);

      expect(result).toEqual(["new-val"]);
    });
  });

  describe("mergeAttributes", () => {
    it("should merge multiple attribute lists removing duplicates", () => {
      const list1 = [{ id: "a1", value: ["v1"] }] as any;
      const list2 = [
        { id: "a1", value: ["v2"] },
        { id: "a2", value: ["v3"] },
      ] as any;

      const result = mergeAttributes(list1, list2);

      expect(result).toHaveLength(2);
      expect(result.find((a: any) => a.id === "a1")?.value).toEqual(["v2"]);
    });

    it("should handle empty lists", () => {
      const result = mergeAttributes([], []);

      expect(result).toEqual([]);
    });
  });

  describe("getRichTextAttributesFromMap", () => {
    it("should return rich text attributes with values", () => {
      const attributes = [
        { id: "a1", data: { inputType: AttributeInputTypeEnum.RICH_TEXT }, value: [] },
        { id: "a2", data: { inputType: AttributeInputTypeEnum.DROPDOWN }, value: [] },
      ] as any;
      const values = { a1: { blocks: [] } } as any;

      const result = getRichTextAttributesFromMap(attributes, values);

      expect(result).toHaveLength(1);
      expect(result[0].id).toBe("a1");
    });
  });

  describe("getRichTextDataFromAttributes", () => {
    it("should extract rich text data from attributes", () => {
      const attributes = [
        {
          id: "a1",
          data: { inputType: AttributeInputTypeEnum.RICH_TEXT },
          value: ['{"blocks":[]}'],
        },
        { id: "a2", data: { inputType: AttributeInputTypeEnum.DROPDOWN }, value: ["test"] },
      ] as any;

      const result = getRichTextDataFromAttributes(attributes);

      expect(result).toEqual({ a1: '{"blocks":[]}' });
    });

    it("should handle empty attributes", () => {
      expect(getRichTextDataFromAttributes()).toEqual({});
    });
  });

  describe("getFileValuesToUploadFromAttributes", () => {
    it("should filter attributes with file values", () => {
      const attrs = [
        { id: "a1", value: new File([], "test.txt") },
        { id: "a2", value: null },
      ] as any;

      const result = getFileValuesToUploadFromAttributes(attrs);

      expect(result).toHaveLength(1);
      expect(result[0].id).toBe("a1");
    });
  });

  describe("getAttributesAfterFileAttributesUpdate", () => {
    it("should combine uploaded and removed file attributes", () => {
      const attrs = [
        { id: "a1", value: new File([], "test.txt") },
        { id: "a2", value: null },
      ] as any;
      const uploadResults = [
        {
          data: {
            fileUpload: {
              uploadedFile: { url: "http://example.com/file.txt", contentType: "text/plain" },
            },
          },
        },
      ] as any;

      const result = getAttributesAfterFileAttributesUpdate(attrs, uploadResults);

      expect(result).toHaveLength(2);
    });
  });

  describe("handleContainerReferenceAssignment", () => {
    it("should handle single reference assignment", () => {
      const selectRef = jest.fn();
      const selectMeta = jest.fn();
      const attributes = [
        { id: "attr-1", data: { inputType: AttributeInputTypeEnum.SINGLE_REFERENCE } },
      ] as any;
      const values = [{ id: "ref-1", name: "Ref 1" }];

      handleContainerReferenceAssignment("attr-1", values, attributes, {
        selectAttributeReference: selectRef,
        selectAttributeReferenceAdditionalData: selectMeta,
      });

      expect(selectRef).toHaveBeenCalledWith("attr-1", ["ref-1"]);
      expect(selectMeta).toHaveBeenCalledWith("attr-1", [{ value: "ref-1", label: "Ref 1" }]);
    });

    it("should handle multi reference assignment", () => {
      const selectRef = jest.fn();
      const selectMeta = jest.fn();
      const attributes = [
        { id: "attr-1", data: { inputType: AttributeInputTypeEnum.REFERENCE }, value: [] },
      ] as any;
      const values = [
        { id: "ref-1", name: "Ref 1" },
        { id: "ref-2", name: "Ref 2" },
      ];

      handleContainerReferenceAssignment("attr-1", values, attributes, {
        selectAttributeReference: selectRef,
        selectAttributeReferenceAdditionalData: selectMeta,
      });

      expect(selectRef).toHaveBeenCalled();
      expect(selectMeta).toHaveBeenCalled();
    });

    it("should handle single reference with empty values", () => {
      const selectRef = jest.fn();
      const selectMeta = jest.fn();
      const attributes = [
        { id: "attr-1", data: { inputType: AttributeInputTypeEnum.SINGLE_REFERENCE } },
      ] as any;

      handleContainerReferenceAssignment("attr-1", [], attributes, {
        selectAttributeReference: selectRef,
        selectAttributeReferenceAdditionalData: selectMeta,
      });

      expect(selectRef).toHaveBeenCalledWith("attr-1", []);
      expect(selectMeta).toHaveBeenCalledWith("attr-1", []);
    });
  });

  describe("handleMetadataReferenceAssignment", () => {
    it("should handle single reference metadata assignment", () => {
      const selectRef = jest.fn();
      const selectMeta = jest.fn();
      const attributes = [
        { id: "attr-1", data: { inputType: AttributeInputTypeEnum.SINGLE_REFERENCE } },
      ] as any;
      const values = [{ value: "ref-1", label: "Ref 1" }];

      handleMetadataReferenceAssignment("attr-1", values, attributes, {
        selectAttributeReference: selectRef,
        selectAttributeReferenceAdditionalData: selectMeta,
      });

      expect(selectRef).toHaveBeenCalledWith("attr-1", ["ref-1"]);
      expect(selectMeta).toHaveBeenCalledWith("attr-1", [{ value: "ref-1", label: "Ref 1" }]);
    });

    it("should handle multi reference metadata assignment with dedup", () => {
      const selectRef = jest.fn();
      const selectMeta = jest.fn();
      const attributes = [
        {
          id: "attr-1",
          data: { inputType: AttributeInputTypeEnum.REFERENCE },
          value: ["existing-ref"],
          additionalData: [{ value: "existing-ref", label: "Existing" }],
        },
      ] as any;
      const values = [{ value: "new-ref", label: "New" }];

      handleMetadataReferenceAssignment("attr-1", values, attributes, {
        selectAttributeReference: selectRef,
        selectAttributeReferenceAdditionalData: selectMeta,
      });

      expect(selectRef).toHaveBeenCalled();
      expect(selectMeta).toHaveBeenCalled();
    });

    it("should handle single metadata with empty values", () => {
      const selectRef = jest.fn();
      const selectMeta = jest.fn();
      const attributes = [
        { id: "attr-1", data: { inputType: AttributeInputTypeEnum.SINGLE_REFERENCE } },
      ] as any;

      handleMetadataReferenceAssignment("attr-1", [], attributes, {
        selectAttributeReference: selectRef,
        selectAttributeReferenceAdditionalData: selectMeta,
      });

      expect(selectRef).toHaveBeenCalledWith("attr-1", []);
      expect(selectMeta).toHaveBeenCalledWith("attr-1", []);
    });
  });

  describe("getReferenceAttributeDisplayData", () => {
    it("should return attribute with references from additionalData", () => {
      const attribute = {
        id: "a1",
        data: { entityType: AttributeEntityTypeEnum.PRODUCT },
        value: ["ref-1"],
        additionalData: [{ value: "ref-1", label: "Product 1" }],
      } as any;

      const result = getReferenceAttributeDisplayData(attribute, {});

      expect(result.data.references[0]).toEqual({ label: "Product 1", value: "ref-1" });
    });

    it("should return undefined references for empty value", () => {
      const attribute = {
        id: "a1",
        data: { entityType: AttributeEntityTypeEnum.PRODUCT },
        value: [],
        additionalData: [],
      } as any;

      const result = getReferenceAttributeDisplayData(attribute, {});

      expect(result.data.references).toEqual([]);
    });

    it("should fall back to entity search for missing additionalData", () => {
      const attribute = {
        id: "a1",
        data: { entityType: AttributeEntityTypeEnum.PRODUCT },
        value: ["prod-1"],
        additionalData: [],
      } as any;
      const references = {
        products: [{ id: "prod-1", name: "Product 1" }],
      };

      const result = getReferenceAttributeDisplayData(attribute, references);

      expect(result.data.references[0]).toEqual({ label: "Product 1", value: "prod-1" });
    });

    it("should find page references", () => {
      const attribute = {
        id: "a1",
        data: { entityType: AttributeEntityTypeEnum.PAGE },
        value: ["page-1"],
        additionalData: [],
      } as any;
      const references = {
        pages: [{ id: "page-1", title: "Page 1" }],
      };

      const result = getReferenceAttributeDisplayData(attribute, references);

      expect(result.data.references[0]).toEqual({ label: "Page 1", value: "page-1" });
    });
  });
});
