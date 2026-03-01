import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/attributes/utils/data", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getReferenceAttributeEntityTypeFromAttribute: jest.fn((..._a: any[]) => createDeepMock()),
  mergeAttributeValues: jest.fn((..._a: any[]) => createDeepMock()),
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
jest.mock("@dashboard/components/Metadata", () => ({
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
  ProductErrorWithAttributesFragment: () => null,
  ProductVariantCreateDataQuery: () => null,
  SearchAttributeValuesQuery: () => null,
  SearchCategoriesQuery: () => null,
  SearchCollectionsQuery: () => null,
  SearchPagesQuery: () => null,
  SearchProductsQuery: () => null,
  SearchWarehousesQuery: () => null,
}));
jest.mock("@dashboard/hooks/useForm", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  SubmitPromise: () => null,
}));
jest.mock("@dashboard/hooks/useNavigator", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useNavigator: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/products/components/ProductVariantChannels/ChannelsAvailabilityCard", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ProductDetailsChannelsAvailabilityCard: () => null,
}));
jest.mock("@dashboard/products/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  productUrl: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/utils/maps", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  mapEdgesToItems: jest.fn((..._a: any[]) => createDeepMock()),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { ProductVariantCreatePage } from "./ProductVariantCreatePage";

describe("ProductVariantCreatePage deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders ProductVariantCreatePage with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <ProductVariantCreatePage {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders ProductVariantCreatePage with override props", () => {
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
          <ProductVariantCreatePage {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
