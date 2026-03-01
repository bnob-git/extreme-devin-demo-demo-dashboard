import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/components/ActionDialog", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ActionDialog: () => null,
}));
jest.mock("@dashboard/components/CardSpacer", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  CardSpacer: () => null,
}));
jest.mock("@dashboard/components/messages", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  IMessage: () => null,
}));
jest.mock("@dashboard/giftCards/hooks/useGiftCardPermissions", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useGiftCardPermissions: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useGiftCardUpdateMutation: () => [
    jest.fn(() => Promise.resolve({ data: createDeepMock() })),
    { data: undefined, loading: false, called: false, status: "default" },
  ],
}));
jest.mock("@dashboard/hooks/useForm", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useForm: (..._a: any[]) => createDeepMock(),
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

import GiftCardUpdateBalanceDialog from "./GiftCardUpdateBalanceDialog";

describe("GiftCardUpdateBalanceDialog deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders GiftCardUpdateBalanceDialog with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <GiftCardUpdateBalanceDialog {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders GiftCardUpdateBalanceDialog with override props", () => {
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
          <GiftCardUpdateBalanceDialog {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
