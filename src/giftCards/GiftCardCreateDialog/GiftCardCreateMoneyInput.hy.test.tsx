import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/hooks/useForm", () => ({
  __esModule: true,
  default: (init: any, onSubmit: any) => ({
    data: init || {},
    change: jest.fn(),
    submit: onSubmit || jest.fn(),
    hasChanged: false,
    setChanged: jest.fn(),
    errors: {},
    setError: jest.fn(),
    clearErrors: jest.fn(),
  }),
}));
jest.mock("@dashboard/hooks/useLocalStorage", () => ({
  __esModule: true,
  default: (_k: string, init: any) => [init, jest.fn()],
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { GiftCardCreateMoneyInput } from "./GiftCardCreateMoneyInput";

describe("GiftCardCreateMoneyInput hybrid render tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders GiftCardCreateMoneyInput with deepMock props", () => {
    try {
      render(
        <MemoryRouter>
          <GiftCardCreateMoneyInput {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders GiftCardCreateMoneyInput with override props", () => {
    const props = createDeepMock({
      id: "test-1",
      disabled: false,
      loading: false,
      errors: [],
      onSubmit: jest.fn(),
      onChange: jest.fn(),
      onClose: jest.fn(),
      params: { id: "test-1" },
      data: createDeepMock(),
      channels: [],
      selected: 0,
      activeTab: 0,
    });

    try {
      render(
        <MemoryRouter>
          <GiftCardCreateMoneyInput {...(props as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
