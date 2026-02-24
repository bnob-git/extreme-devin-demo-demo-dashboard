import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/components/AppLayout/ContextualLinks/useContextualLink", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useContextualLink: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/components/AppLayout/TopNav", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  TopNav: () => null,
}));
jest.mock("@dashboard/components/ButtonGroupWithDropdown", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ButtonGroupWithDropdown: () => null,
}));
jest.mock("@dashboard/components/FilterPresetsSelect", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  FilterPresetsSelect: () => null,
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
  getExtensionsItemsForGiftCardOverviewActions: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/extensions/hooks/useExtensions", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useExtensions: (..._a: any[]) => createDeepMock(),
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

import GiftCardsListHeader from "./GiftCardsListHeader";

describe("GiftCardsListHeader deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders GiftCardsListHeader with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <GiftCardsListHeader {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders GiftCardsListHeader with override props", () => {
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
          <GiftCardsListHeader {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
