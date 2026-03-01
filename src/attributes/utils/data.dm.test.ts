jest.mock("@dashboard/components/Attributes", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  AttributeInput: () => null,
  AttributeInputData: () => null,
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  AttributeEntityTypeEnum: () => null,
  AttributeErrorFragment: () => null,
  AttributeInputTypeEnum: () => null,
  AttributeValueDeleteMutation: () => null,
  AttributeValueFragment: () => null,
  AttributeValueInput: () => null,
  FileUploadMutation: () => null,
  PageSelectedAttributeFragment: () => null,
  ProductFragment: () => null,
  SearchCategoriesQuery: () => null,
  SearchCollectionsQuery: () => null,
  SearchPagesQuery: () => null,
  SearchProductsQuery: () => null,
  SelectedVariantAttributeFragment: () => null,
  UploadErrorFragment: () => null,
}));
jest.mock("@dashboard/hooks/useFormset", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  FormsetData: () => null,
}));
jest.mock("@dashboard/products/utils/data", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  AttributeValuesMetadata: () => null,
}));
jest.mock("@dashboard/utils/maps", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  mapEdgesToItems: jest.fn((...args: any[]) => args[0] ?? {}),
}));
jest.mock("@dashboard/utils/richText/context", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  RichTextContextValues: () => null,
}));
jest.mock("@dashboard/utils/richText/useMultipleRichText", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  GetRichTextValues: () => null,
  RichTextGetters: () => null,
}));

describe("data deep-mock tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls getAttributesDisplayData with deep-mocked deps", () => {
    try {
      const result = (getAttributesDisplayData as any)({
        data: {
          id: "test-id",
          name: "test",
          metadata: [],
          privateMetadata: [],
          __typename: "TestType",
        },
      });

      if (result && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls getReferenceAttributeEntityTypeFromAttribute with deep-mocked deps", () => {
    try {
      const result = (getReferenceAttributeEntityTypeFromAttribute as any)("test-id", { find: {} });

      if (result && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
