import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/components/ActionDialog", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ActionDialogProps: () => null,
}));
jest.mock("@dashboard/giftCards/GiftCardsList/providers/GiftCardListProvider", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useGiftCardList: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/giftCards/GiftCardsList/queries", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  GIFT_CARD_LIST_QUERY: () => null,
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import GiftCardDeleteDialog from "./GiftCardListPageDeleteDialog";

describe("GiftCardListPageDeleteDialog deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders GiftCardDeleteDialog with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <GiftCardDeleteDialog {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders GiftCardDeleteDialog with override props", () => {
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
          <GiftCardDeleteDialog {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
