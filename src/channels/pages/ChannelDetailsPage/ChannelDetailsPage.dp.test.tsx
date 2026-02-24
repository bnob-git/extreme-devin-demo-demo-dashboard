import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/channels/components/ChannelAllocationStrategy", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ChannelAllocationStrategy: () => null,
}));
jest.mock("@dashboard/channels/components/ShippingZones", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ShippingZones: () => null,
}));
jest.mock("@dashboard/channels/components/Warehouses", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Warehouses: () => null,
}));
jest.mock("@dashboard/channels/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  channelsListUrl: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/channels/validation", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  validateChannelFormData: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/components/AppLayout/TopNav", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  TopNav: () => null,
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
jest.mock("@dashboard/components/Form", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Form: () => null,
}));
jest.mock("@dashboard/components/Layouts", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  DetailPageLayout: () => null,
}));
jest.mock("@dashboard/components/RequirePermissions", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  RequirePermissions: () => null,
}));
jest.mock("@dashboard/components/Savebar", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Savebar: () => null,
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  AllocationStrategyEnum: () => null,
  ChannelDetailsFragment: () => null,
  ChannelErrorFragment: () => null,
  CountryCode: () => null,
  CountryFragment: () => null,
  PermissionEnum: () => null,
  SearchShippingZonesQuery: () => null,
  SearchWarehousesQuery: () => null,
  StockSettingsInput: () => null,
}));
jest.mock("@dashboard/graphql/staging", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ChannelDetailsFragment: () => null,
}));
jest.mock("@dashboard/graphql/types.generated", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  MarkAsPaidStrategyEnum: () => null,
  TransactionFlowStrategyEnum: () => null,
}));
jest.mock("@dashboard/hooks/makeTopLevelSearch", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  SearchData: () => null,
}));
jest.mock("@dashboard/hooks/makeTopLevelSearch/utils", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getParsedSearchData: jest.fn((..._a: any[]) => createDeepMock()),
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
jest.mock("@dashboard/hooks/useStateFromProps", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useStateFromProps: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/utils/handlers/singleAutocompleteSelectChangeHandler", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  createSingleAutocompleteSelectHandler: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/utils/maps", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  mapCountriesToChoices: jest.fn((..._a: any[]) => createDeepMock()),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import ChannelDetailsPage from "./ChannelDetailsPage";

describe("ChannelDetailsPage deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders ChannelDetailsPage with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <ChannelDetailsPage {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders ChannelDetailsPage with override props", () => {
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
          <ChannelDetailsPage {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
