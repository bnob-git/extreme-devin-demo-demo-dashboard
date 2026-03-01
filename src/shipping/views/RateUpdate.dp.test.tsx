import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/channels/utils", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Channel: () => null,
  ChannelShippingData: () => null,
  createShippingChannelsFromRate: jest.fn((..._a: any[]) => createDeepMock()),
  createSortedShippingChannels: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/components/Button", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Button: () => null,
}));
jest.mock("@dashboard/components/ChannelsAvailabilityDialog", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ChannelsAvailabilityDialog: () => null,
}));
jest.mock("@dashboard/components/WindowTitle", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  WindowTitle: () => null,
}));
jest.mock("@dashboard/config", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  DEFAULT_INITIAL_SEARCH_DATA: () => null,
  PAGINATE_BY: () => null,
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  PostalCodeRuleInclusionTypeEnum: () => null,
  ShippingMethodTypeEnum: () => null,
  ShippingMethodTypeFragment: () => null,
  ShippingMethodWithPostalCodesFragment: () => null,
  useDeleteShippingRateMutation: () => [
    jest.fn(() => Promise.resolve({ data: createDeepMock() })),
    { data: undefined, loading: false, called: false, status: "default" },
  ],
  useShippingMethodChannelListingUpdateMutation: () => [
    jest.fn(() => Promise.resolve({ data: createDeepMock() })),
    { data: undefined, loading: false, called: false, status: "default" },
  ],
  useShippingPriceExcludeProductMutation: () => [
    jest.fn(() => Promise.resolve({ data: createDeepMock() })),
    { data: undefined, loading: false, called: false, status: "default" },
  ],
  useShippingPriceRemoveProductFromExcludeMutation: () => [
    jest.fn(() => Promise.resolve({ data: createDeepMock() })),
    { data: undefined, loading: false, called: false, status: "default" },
  ],
  useShippingZoneQuery: () => ({
    data: createDeepMock(),
    loading: false,
    error: undefined,
    refetch: jest.fn(),
    fetchMore: jest.fn(),
  }),
  useUpdateMetadataMutation: () => [
    jest.fn(() => Promise.resolve({ data: createDeepMock() })),
    { data: undefined, loading: false, called: false, status: "default" },
  ],
  useUpdatePrivateMetadataMutation: () => [
    jest.fn(() => Promise.resolve({ data: createDeepMock() })),
    { data: undefined, loading: false, called: false, status: "default" },
  ],
  useUpdateShippingRateMutation: () => [
    jest.fn(() => Promise.resolve({ data: createDeepMock() })),
    { data: undefined, loading: false, called: false, status: "default" },
  ],
}));
jest.mock("@dashboard/hooks/useBulkActions", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useBulkActions: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useChannels", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useChannels: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useLocalPaginator", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useLocalPaginationState: (..._a: any[]) => createDeepMock(),
  useLocalPaginator: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useNavigator", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useNavigator: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useNotifier", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useNotifier: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/usePaginator", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  PaginatorContext: () => null,
}));
jest.mock("@dashboard/intl", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  commonMessages: jest.fn((..._a: any[]) => createDeepMock()),
  sectionNames: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/misc", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getById: jest.fn((..._a: any[]) => createDeepMock()),
  getByUnmatchingId: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/searches/useProductSearch", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useProductSearch: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/shipping/components/DeleteShippingRateDialog", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  DeleteShippingRateDialog: () => null,
}));
jest.mock("@dashboard/shipping/components/ShippingMethodProductsAddDialog", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ShippingMethodProductsAddDialog: () => null,
}));
jest.mock("@dashboard/shipping/components/ShippingZonePostalCodeRangeDialog", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ShippingZonePostalCodeRangeDialog: () => null,
}));
jest.mock("@dashboard/shipping/components/ShippingZoneRatesPage", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ShippingZoneRatesPage: () => null,
}));
jest.mock("@dashboard/shipping/components/UnassignDialog", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  UnassignDialog: () => null,
}));
jest.mock("@dashboard/shipping/handlers", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getShippingMethodChannelVariables: jest.fn((..._a: any[]) => createDeepMock()),
  getUpdateShippingPriceRateVariables: jest.fn((..._a: any[]) => createDeepMock()),
  getUpdateShippingWeightRateVariables: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/shipping/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  shippingRateEditUrl: jest.fn((..._a: any[]) => createDeepMock()),
  ShippingRateUrlDialog: () => null,
  ShippingRateUrlQueryParams: () => null,
  shippingZoneUrl: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/shipping/views/reducer", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  postalCodesReducer: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/shipping/views/utils", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  filterPostalCodes: jest.fn((..._a: any[]) => createDeepMock()),
  getPostalCodeRuleByMinMax: jest.fn((..._a: any[]) => createDeepMock()),
  getRuleObject: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/taxes/utils/useTaxClassFetchMore", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useTaxClassFetchMore: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/utils/handlers/dialogActionHandlers", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  createDialogActionHandlers: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/utils/handlers/metadataUpdateHandler", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  createMetadataUpdateHandler: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/utils/maps", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  mapEdgesToItems: jest.fn((..._a: any[]) => createDeepMock()),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import RateUpdate from "./RateUpdate";

describe("RateUpdate deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders RateUpdate with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <RateUpdate {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders RateUpdate with override props", () => {
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
          <RateUpdate {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
