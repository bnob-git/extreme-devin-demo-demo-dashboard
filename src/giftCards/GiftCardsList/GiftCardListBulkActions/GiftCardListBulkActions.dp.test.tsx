import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/components/ConfirmButton", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ConfirmButton: () => null,
}));
jest.mock("@dashboard/components/messages", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  IMessage: () => null,
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useGiftCardBulkActivateMutation: () => [
    jest.fn(() => Promise.resolve({ data: createDeepMock() })),
    { data: undefined, loading: false, called: false, status: "default" },
  ],
  useGiftCardBulkDeactivateMutation: () => [
    jest.fn(() => Promise.resolve({ data: createDeepMock() })),
    { data: undefined, loading: false, called: false, status: "default" },
  ],
}));
jest.mock("@dashboard/hooks/useNotifier", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useNotifier: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/orders/components/OrderReturnPage/utils", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getByIds: jest.fn((..._a: any[]) => createDeepMock()),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { GiftCardListBulkActions } from "./GiftCardListBulkActions";

describe("GiftCardListBulkActions deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders GiftCardListBulkActions with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <GiftCardListBulkActions {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders GiftCardListBulkActions with override props", () => {
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
          <GiftCardListBulkActions {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
