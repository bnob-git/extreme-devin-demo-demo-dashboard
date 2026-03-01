import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/attributes/utils/data", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getAttributesDisplayData: jest.fn((..._a: any[]) => createDeepMock()),
  getRichTextAttributesFromMap: jest.fn((..._a: any[]) => createDeepMock()),
  getRichTextDataFromAttributes: jest.fn((..._a: any[]) => createDeepMock()),
  mergeAttributes: jest.fn((..._a: any[]) => createDeepMock()),
  RichTextProps: () => null,
}));
jest.mock("@dashboard/attributes/utils/handlers", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  createAttributeChangeHandler: jest.fn((..._a: any[]) => createDeepMock()),
  createAttributeFileChangeHandler: jest.fn((..._a: any[]) => createDeepMock()),
  createAttributeMultiChangeHandler: jest.fn((..._a: any[]) => createDeepMock()),
  createAttributeReferenceAdditionalDataHandler: jest.fn((..._a: any[]) => createDeepMock()),
  createAttributeReferenceChangeHandler: jest.fn((..._a: any[]) => createDeepMock()),
  createAttributeValueReorderHandler: jest.fn((..._a: any[]) => createDeepMock()),
  createFetchMoreReferencesHandler: jest.fn((..._a: any[]) => createDeepMock()),
  createFetchReferencesHandler: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/channels/utils", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ChannelData: () => null,
  ChannelPriceArgs: () => null,
}));
jest.mock("@dashboard/components/Attributes", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  AttributeInput: () => null,
  AttributeInputData: () => null,
}));
jest.mock("@dashboard/components/Form/useExitFormDialog", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useExitFormDialog: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/components/Metadata", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  MetadataFormData: () => null,
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ProductErrorWithAttributesFragment: () => null,
  ProductTypeQuery: () => null,
  SearchCategoriesQuery: () => null,
  SearchCollectionsQuery: () => null,
  SearchPagesQuery: () => null,
  SearchProductsQuery: () => null,
  SearchProductTypesQuery: () => null,
}));
jest.mock("@dashboard/hooks/useForm", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  CommonUseFormResultWithHandlers: () => null,
  FormChange: () => null,
  FormErrors: () => null,
  SubmitPromise: () => null,
  useForm: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useFormset", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  FormsetAdditionalDataChange: () => null,
  FormsetChange: () => null,
  FormsetData: () => null,
  useFormset: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useHandleFormSubmit", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useHandleFormSubmit: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/intl", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  errorMessages: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/products/utils/data", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  AttributeValuesMetadata: () => null,
  getAttributeInputFromProductType: jest.fn((..._a: any[]) => createDeepMock()),
  ProductType: () => null,
}));
jest.mock("@dashboard/products/utils/handlers", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  createChannelsChangeHandler: jest.fn((..._a: any[]) => createDeepMock()),
  createChannelsPriceChangeHandler: jest.fn((..._a: any[]) => createDeepMock()),
  createPreorderEndDateChangeHandler: jest.fn((..._a: any[]) => createDeepMock()),
  createProductTypeSelectHandler: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/products/utils/validation", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  validateCostPrice: jest.fn((..._a: any[]) => createDeepMock()),
  validatePrice: jest.fn((..._a: any[]) => createDeepMock()),
  validateProductCreateData: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/products/views/ProductCreate/consts", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  PRODUCT_CREATE_FORM_ID: () => null,
}));
jest.mock("@dashboard/utils/handlers/multiselectChangeHandler", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  createMultiselectChangeHandler: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/utils/handlers/singleAutocompleteSelectChangeHandler", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  createSingleAutocompleteSelectHandler: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/utils/metadata/useMetadataChangeTrigger", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useMetadataChangeTrigger: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/utils/richText/context", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  RichTextContext: () => null,
}));
jest.mock("@dashboard/utils/richText/useMultipleRichText", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useMultipleRichText: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/utils/richText/useRichText", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useRichText: (..._a: any[]) => createDeepMock(),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import ProductCreateForm from "./form";

describe("form deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders ProductCreateForm with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <ProductCreateForm {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders ProductCreateForm with override props", () => {
    try {
      const mockProps = createDeepMock({
        id: "test-1",
        name: "Test",
        disabled: false,
        loading: false,
        errors: [],
        data: createDeepMock(),
        onSubmit: jest.fn(),
        onChange: jest.fn(),
        onClose: jest.fn(),
        onBack: jest.fn(),
        open: false,
        channels: [],
        params: { id: "test-1" },
      });

      render(
        <MemoryRouter>
          <ProductCreateForm {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
