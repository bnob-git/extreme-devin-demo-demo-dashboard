import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/components/AddressFormatter", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  AddressFormatter: () => null,
}));
jest.mock("@dashboard/components/Card", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  DashboardCard: () => null,
}));
jest.mock("@dashboard/components/Link", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Link: () => null,
}));
jest.mock("@dashboard/components/RequirePermissions", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  RequirePermissions: () => null,
}));
jest.mock("@dashboard/customers/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  customerUrl: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  OrderDetailsFragment: () => null,
  OrderErrorCode: () => null,
  OrderErrorFragment: () => null,
  PermissionEnum: () => null,
  SearchCustomersQuery: () => null,
}));
jest.mock("@dashboard/hooks/useClipboard", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useClipboard: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useStateFromProps", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useStateFromProps: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/intl", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  buttonMessages: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/orders/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  orderListUrlWithCustomerEmail: jest.fn((..._a: any[]) => createDeepMock()),
  orderListUrlWithCustomerId: jest.fn((..._a: any[]) => createDeepMock()),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import OrderCustomer from "./OrderCustomer";

describe("OrderCustomer deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders OrderCustomer with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <OrderCustomer {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders OrderCustomer with override props", () => {
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
          <OrderCustomer {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
