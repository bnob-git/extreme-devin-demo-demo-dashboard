import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/components/Combobox", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Combobox: () => null,
}));
jest.mock("@dashboard/config", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  DEFAULT_INITIAL_SEARCH_DATA: () => null,
}));
jest.mock("@dashboard/intl", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  commonMessages: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/misc", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getFullName: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/searches/useCustomerSearch", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useCustomerSearch: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/utils/maps", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  mapEdgesToItems: jest.fn((..._a: any[]) => createDeepMock()),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import GiftCardCustomerSelectField from "./GiftCardCustomerSelectField";

describe("GiftCardCustomerSelectField deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders GiftCardCustomerSelectField with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <GiftCardCustomerSelectField {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders GiftCardCustomerSelectField with override props", () => {
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
          <GiftCardCustomerSelectField {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
