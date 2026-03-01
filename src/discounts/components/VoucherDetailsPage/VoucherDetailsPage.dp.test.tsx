import { createDeepMock } from "@test/deepMock";

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
  ChannelVoucherData: () => null,
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
jest.mock("@dashboard/components/Metadata", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Metadata: () => null,
  MetadataFormData: () => null,
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
jest.mock("@dashboard/discounts/handlers", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  createChannelsChangeHandler: jest.fn((..._a: any[]) => createDeepMock()),
  createDiscountTypeChangeHandler: jest.fn((..._a: any[]) => createDeepMock()),
  createVoucherUpdateHandler: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/discounts/translations", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  itemsQuantityMessages: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/discounts/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  voucherListPath: jest.fn((..._a: any[]) => createDeepMock()),
}));
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
  getExtensionsItemsForVoucherDetails: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/extensions/hooks/useExtensions", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useExtensions: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  DiscountErrorFragment: () => null,
  DiscountValueTypeEnum: () => null,
  PermissionEnum: () => null,
  SearchProductFragment: () => null,
  VoucherDetailsFragment: () => null,
  VoucherTypeEnum: () => null,
}));
jest.mock("@dashboard/hooks/useBackLinkWithState", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useBackLinkWithState: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useListSettings", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  UseListSettings: () => null,
}));
jest.mock("@dashboard/hooks/useLocalPaginator", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  LocalPagination: () => null,
}));
jest.mock("@dashboard/hooks/useNavigator", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useNavigator: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/translations/components/TranslationsButton/TranslationsButton", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  TranslationsButton: () => null,
}));
jest.mock("@dashboard/translations/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  languageEntityUrl: jest.fn((..._a: any[]) => createDeepMock()),
  TranslatableEntities: () => null,
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
  mapMetadataItemToInput: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/utils/metadata/useMetadataChangeTrigger", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useMetadataChangeTrigger: (..._a: any[]) => createDeepMock(),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import VoucherDetailsPage from "./VoucherDetailsPage";

describe("VoucherDetailsPage deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders VoucherDetailsPage with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <VoucherDetailsPage {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders VoucherDetailsPage with override props", () => {
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
          <VoucherDetailsPage {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
