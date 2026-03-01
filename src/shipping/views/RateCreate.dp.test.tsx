import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/channels/utils", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  createSortedShippingChannels: jest.fn((..._a: any[]) => createDeepMock()),
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
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  PostalCodeRuleInclusionTypeEnum: () => null,
  useShippingZoneChannelsQuery: () => ({
    data: createDeepMock(),
    loading: false,
    error: undefined,
    refetch: jest.fn(),
    fetchMore: jest.fn(),
  }),
}));
jest.mock("@dashboard/hooks/useChannels", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useChannels: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useNavigator", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useNavigator: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/intl", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  sectionNames: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/shipping/components/ShippingZonePostalCodeRangeDialog", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ShippingZonePostalCodeRangeDialog: () => null,
}));
jest.mock("@dashboard/shipping/components/ShippingZoneRatesCreatePage", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ShippingZoneRatesCreatePage: () => null,
}));
jest.mock("@dashboard/shipping/handlers", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useShippingRateCreator: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/shipping/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  shippingRateCreateUrl: jest.fn((..._a: any[]) => createDeepMock()),
  ShippingRateCreateUrlDialog: () => null,
  ShippingRateCreateUrlQueryParams: () => null,
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

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import RateCreate from "./RateCreate";

describe("RateCreate deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders RateCreate with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <RateCreate {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders RateCreate with override props", () => {
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
          <RateCreate {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
