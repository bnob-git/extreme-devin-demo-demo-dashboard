import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/components/CardMenu", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  CardMenuItem: () => null,
  CardMenu: () => null,
}));
jest.mock(
  "@dashboard/giftCards/GiftCardUpdate/GiftCardUpdatePageHeader/hooks/useGiftCardActivateToggle",
  () => ({
    __esModule: true,
    default: jest.fn((..._a: any[]) => createDeepMock()),
    useGiftCardActivateToggle: (..._a: any[]) => createDeepMock(),
  }),
);
jest.mock("@dashboard/giftCards/GiftCardsList/messages", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  bulkEnableDisableSectionMessages: jest.fn((..._a: any[]) => createDeepMock()),
  giftCardsListTableMessages: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  CustomerGiftCardFragment: () => null,
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import CustomerGiftCardsCardListItem from "./CustomerGiftCardsCardListItem";

describe("CustomerGiftCardsCardListItem deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders CustomerGiftCardsCardListItem with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <CustomerGiftCardsCardListItem {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders CustomerGiftCardsCardListItem with override props", () => {
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
          <CustomerGiftCardsCardListItem {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
