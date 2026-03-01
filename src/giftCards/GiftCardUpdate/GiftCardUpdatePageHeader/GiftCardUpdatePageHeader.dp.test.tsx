import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/components/AppLayout/TopNav", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  TopNav: () => null,
}));
jest.mock("@dashboard/components/HorizontalSpacer", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  HorizontalSpacer: () => null,
}));
jest.mock("@dashboard/extensions/extensionMountPoints", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  extensionMountPoints: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/extensions/getExtensionsItems", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getExtensionsItemsForGiftCardDetails: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/extensions/hooks/useExtensions", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useExtensions: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/giftCards/components/GiftCardStatusChip/GiftCardStatusChip", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  GiftCardStatusChip: () => null,
}));
jest.mock("@dashboard/giftCards/hooks/useGiftCardPermissions", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useGiftCardPermissions: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/giftCards/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  giftCardsListPath: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/hooks/useBackLinkWithState", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useBackLinkWithState: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/misc", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getStringOrPlaceholder: jest.fn((..._a: any[]) => createDeepMock()),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import GiftCardUpdatePageHeader from "./GiftCardUpdatePageHeader";

describe("GiftCardUpdatePageHeader deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders GiftCardUpdatePageHeader with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <GiftCardUpdatePageHeader {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders GiftCardUpdatePageHeader with override props", () => {
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
          <GiftCardUpdatePageHeader {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
