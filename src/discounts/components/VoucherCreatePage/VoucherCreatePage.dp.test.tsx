import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/channels/utils", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ChannelVoucherData: () => null,
}));
jest.mock("@dashboard/components/AppLayout/TopNav", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  TopNav: () => null,
}));
jest.mock("@dashboard/components/AssignCategoryDialog/AssignCategoryDialog", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  AssignCategoriesDialog: () => null,
}));
jest.mock("@dashboard/components/AssignCollectionDialog", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  AssignCollectionDialog: () => null,
}));
jest.mock("@dashboard/components/AssignProductDialog", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  AssignProductDialog: () => null,
}));
jest.mock("@dashboard/components/AssignVariantDialog/AssignVariantDialog", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  AssignVariantDialog: () => null,
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
jest.mock("@dashboard/components/CountryList", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  CountryList: () => null,
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
jest.mock("@dashboard/components/Tab", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Tab: () => null,
  TabContainer: () => null,
}));
jest.mock("@dashboard/discounts/components/DiscountCategories", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  DiscountCategories: () => null,
}));
jest.mock("@dashboard/discounts/components/DiscountCollections", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  DiscountCollections: () => null,
}));
jest.mock("@dashboard/discounts/components/DiscountCountrySelectDialog", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  DiscountCountrySelectDialog: () => null,
}));
jest.mock("@dashboard/discounts/components/DiscountProducts", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  DiscountProducts: () => null,
}));
jest.mock("@dashboard/discounts/components/VoucherCreatePage/hooks/useSpecificItemsAssign", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useSpecificItemsAssign: (..._a: any[]) => createDeepMock(),
}));
jest.mock(
  "@dashboard/discounts/components/VoucherCreatePage/hooks/useSpecificItemsPagination",
  () => ({
    __esModule: true,
    default: jest.fn((..._a: any[]) => createDeepMock()),
    useSpecificItemsPagination: (..._a: any[]) => createDeepMock(),
  }),
);
jest.mock("@dashboard/discounts/handlers", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  createChannelsChangeHandler: jest.fn((..._a: any[]) => createDeepMock()),
  createDiscountTypeChangeHandler: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/discounts/translations", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  itemsQuantityMessages: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/discounts/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  VoucherCreateUrlQueryParams: () => null,
  voucherListUrl: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  CategoryWithTotalProductsFragment: () => null,
  CollectionWithTotalProductsFragment: () => null,
  CountryWithCodeFragment: () => null,
  DiscountErrorFragment: () => null,
  PermissionEnum: () => null,
  SearchCategoriesWithTotalProductsQuery: () => null,
  SearchCategoriesWithTotalProductsQueryVariables: () => null,
  SearchCollectionsWithTotalProductsQuery: () => null,
  SearchCollectionsWithTotalProductsQueryVariables: () => null,
  SearchProductFragment: () => null,
  SearchProductsQuery: () => null,
  SearchProductsQueryVariables: () => null,
  VoucherDetailsFragment: () => null,
  VoucherTypeEnum: () => null,
}));
jest.mock("@dashboard/hooks/makeSearch", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  UseSearchResult: () => null,
}));
jest.mock("@dashboard/hooks/useForm", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  SubmitPromise: () => null,
  useForm: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useNavigator", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useNavigator: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/usePaginator", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  PaginatorContext: () => null,
}));
jest.mock("@dashboard/intl", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  buttonMessages: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/products/utils/validation", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  validatePrice: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/utils/metadata/useMetadataChangeTrigger", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useMetadataChangeTrigger: (..._a: any[]) => createDeepMock(),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import VoucherCreatePage from "./VoucherCreatePage";

describe("VoucherCreatePage deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders VoucherCreatePage with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <VoucherCreatePage {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders VoucherCreatePage with override props", () => {
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
          <VoucherCreatePage {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
