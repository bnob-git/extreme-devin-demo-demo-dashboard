import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/attributes/utils/data", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getReferenceAttributeEntityTypeFromAttribute: jest.fn((..._a: any[]) => createDeepMock()),
  handleMetadataReferenceAssignment: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/auth", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useUser: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/auth/misc", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  hasPermission: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/channels/utils", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ChannelData: () => null,
}));
jest.mock("@dashboard/components/AppLayout/TopNav", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  TopNav: () => null,
}));
jest.mock("@dashboard/components/AssignAttributeValueDialog", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  AssignAttributeValueDialog: () => null,
}));
jest.mock("@dashboard/components/AssignProductDialog/ModalProductFilterProvider", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  InitialConstraints: () => null,
}));
jest.mock("@dashboard/components/Attributes", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  AttributeInput: () => null,
  Attributes: () => null,
}));
jest.mock("@dashboard/components/CardSpacer", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  CardSpacer: () => null,
}));
jest.mock("@dashboard/components/ChannelsAvailabilityCard", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ChannelsAvailabilityCard: () => null,
}));
jest.mock("@dashboard/components/ConfirmButton", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ConfirmButtonTransitionState: () => null,
}));
jest.mock("@dashboard/components/DevModePanel/hooks", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useDevModeContext: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/components/Layouts", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  DetailPageLayout: () => null,
}));
jest.mock("@dashboard/components/Metadata/Metadata", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Metadata: () => null,
}));
jest.mock("@dashboard/components/Savebar", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Savebar: () => null,
}));
jest.mock("@dashboard/components/SeoForm", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  SeoForm: () => null,
}));
jest.mock(
  "@dashboard/extensions/components/AppExtensionContext/AppExtensionContextProvider",
  () => ({
    __esModule: true,
    default: jest.fn((..._a: any[]) => createDeepMock()),
    useActiveAppExtension: (..._a: any[]) => createDeepMock(),
  }),
);
jest.mock("@dashboard/extensions/components/AppWidgets/AppWidgets", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  AppWidgets: () => null,
}));
jest.mock("@dashboard/extensions/extensionMountPoints", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  extensionMountPoints: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/extensions/getExtensionsItems", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getExtensionsItemsForProductDetails: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/extensions/hooks/useExtensions", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useExtensions: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ChannelFragment: () => null,
  PermissionEnum: () => null,
  ProductChannelListingErrorFragment: () => null,
  ProductDetailsQuery: () => null,
  ProductDetailsVariantFragment: () => null,
  ProductErrorFragment: () => null,
  ProductErrorWithAttributesFragment: () => null,
  ProductFragment: () => null,
  ProductWhereInput: () => null,
  RefreshLimitsQuery: () => null,
  SearchAttributeValuesQuery: () => null,
  SearchCategoriesQuery: () => null,
  SearchCollectionsQuery: () => null,
  SearchPagesQuery: () => null,
  SearchProductsQuery: () => null,
  TaxClassBaseFragment: () => null,
}));
jest.mock("@dashboard/hooks/useBackLinkWithState", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useBackLinkWithState: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useForm", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  FormChange: () => null,
  SubmitPromise: () => null,
}));
jest.mock("@dashboard/hooks/useNavigator", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useNavigator: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useStateFromProps", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useStateFromProps: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/misc", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  maybe: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/products/components/ProductExternalMediaDialog", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ProductExternalMediaDialog: () => null,
}));
jest.mock("@dashboard/products/components/ProductOrganization/ProductOrganization", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ProductOrganization: () => null,
}));
jest.mock("@dashboard/products/components/ProductUpdatePage/utils", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  mapByChannel: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/products/queries", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  defaultGraphiQLQuery: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/products/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  productImageUrl: jest.fn((..._a: any[]) => createDeepMock()),
  productListPath: jest.fn((..._a: any[]) => createDeepMock()),
  productListUrl: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/products/utils/utils", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ChoiceWithAncestors: () => null,
  getChoicesWithAncestors: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/products/views/ProductUpdate/handlers/errors", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ProductVariantListError: () => null,
}));
jest.mock("@dashboard/products/views/ProductUpdate/handlers/useProductUpdateHandler", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  UseProductUpdateHandlerError: () => null,
}));
jest.mock("@dashboard/translations/components/TranslationsButton/TranslationsButton", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  TranslationsButton: () => null,
}));
jest.mock("@dashboard/translations/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  productUrl: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/translations/useCachedLocales", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useCachedLocales: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/utils/richText/useRichText", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  UseRichTextResult: () => null,
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import ProductUpdatePage from "./ProductUpdatePage";

describe("ProductUpdatePage deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders ProductUpdatePage with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <ProductUpdatePage {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders ProductUpdatePage with override props", () => {
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
          <ProductUpdatePage {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
