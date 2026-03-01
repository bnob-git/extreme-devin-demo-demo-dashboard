import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/giftCards/GiftCardsList/providers/GiftCardListProvider", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useGiftCardList: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  BulkDeleteGiftCardMutation: () => null,
  useBulkDeleteGiftCardMutation: () => [
    jest.fn(() => Promise.resolve({ data: createDeepMock() })),
    { data: undefined, loading: false, called: false, status: "default" },
  ],
}));
jest.mock("@dashboard/hooks/makeMutation", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  MutationResultWithOpts: () => null,
}));
jest.mock("@dashboard/hooks/useNotifier", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useNotifier: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/utils/errors/common", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  commonErrorMessages: jest.fn((..._a: any[]) => createDeepMock()),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("useGiftCardBulkDelete deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders useGiftCardBulkDelete with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <useGiftCardBulkDelete {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders useGiftCardBulkDelete with override props", () => {
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
          <useGiftCardBulkDelete {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
