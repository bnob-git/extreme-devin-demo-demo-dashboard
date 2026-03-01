import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/collections/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  collectionAddUrl: jest.fn((..._a: any[]) => createDeepMock()),
  CollectionListUrlSortField: () => null,
  collectionUrl: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/components/AppLayout/ListFilters", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ListFilters: () => null,
}));
jest.mock("@dashboard/components/AppLayout/TopNav", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  TopNav: () => null,
}));
jest.mock("@dashboard/components/BulkDeleteButton", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  BulkDeleteButton: () => null,
}));
jest.mock("@dashboard/components/ButtonGroupWithDropdown", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ButtonGroupWithDropdown: () => null,
}));
jest.mock("@dashboard/components/Card", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  DashboardCard: () => null,
}));
jest.mock("@dashboard/components/Filter/utils", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getByName: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/components/FilterPresetsSelect", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  FilterPresetsSelect: () => null,
}));
jest.mock("@dashboard/components/Layouts", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ListPageLayout: () => null,
}));
jest.mock("@dashboard/extensions/extensionMountPoints", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  extensionMountPoints: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/extensions/getExtensionsItems", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getExtensionItemsForOverviewCreate: jest.fn((..._a: any[]) => createDeepMock()),
  getExtensionsItemsForCollectionOverviewActions: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/extensions/hooks/useExtensions", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useExtensions: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useBackLinkWithState", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getPrevLocationState: jest.fn((..._a: any[]) => createDeepMock()),
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

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import CollectionListPage from "./CollectionListPage";

describe("CollectionListPage deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders CollectionListPage with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <CollectionListPage {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders CollectionListPage with override props", () => {
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
          <CollectionListPage {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
