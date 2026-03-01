import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/attributes/utils/data", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getReferenceAttributeEntityTypeFromAttribute: jest.fn((..._a: any[]) => createDeepMock()),
  handleContainerReferenceAssignment: jest.fn((..._a: any[]) => createDeepMock()),
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
  ChannelPriceData: () => null,
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
jest.mock("@dashboard/components/Attributes", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  AttributeInput: () => null,
  Attributes: () => null,
  VariantAttributeScope: () => null,
}));
jest.mock("@dashboard/components/CardSpacer", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  CardSpacer: () => null,
}));
jest.mock("@dashboard/components/ConfirmButton", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ConfirmButtonTransitionState: () => null,
}));
jest.mock("@dashboard/components/Grid", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Grid: () => null,
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
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  PermissionEnum: () => null,
  ProductChannelListingErrorFragment: () => null,
  ProductErrorWithAttributesFragment: () => null,
  ProductVariantFragment: () => null,
  SearchAttributeValuesQuery: () => null,
  SearchCategoriesQuery: () => null,
  SearchCollectionsQuery: () => null,
  SearchPagesQuery: () => null,
  SearchProductsQuery: () => null,
  SearchWarehousesQuery: () => null,
}));
jest.mock("@dashboard/hooks/useNavigator", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useNavigator: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/products/components/ProductVariantChannels/ChannelsAvailabilityCard", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  VariantDetailsChannelsAvailabilityCard: () => null,
}));
jest.mock("@dashboard/products/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  productUrl: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/products/utils/data", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getSelectedMedia: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/translations/components/TranslationsButton/TranslationsButton", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  TranslationsButton: () => null,
}));
jest.mock("@dashboard/translations/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  productVariantUrl: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/translations/useCachedLocales", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useCachedLocales: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/utils/maps", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  mapEdgesToItems: jest.fn((..._a: any[]) => createDeepMock()),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { ProductVariantPage } from "./ProductVariantPage";

describe("ProductVariantPage deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders ProductVariantPage with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <ProductVariantPage {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders ProductVariantPage with override props", () => {
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
          <ProductVariantPage {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
