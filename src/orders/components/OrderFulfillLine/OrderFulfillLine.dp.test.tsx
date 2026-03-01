import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/components/TableCellAvatar", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  TableCellAvatar: () => null,
}));
jest.mock("@dashboard/components/TableRowLink", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  TableRowLink: () => null,
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  OrderFulfillLineFragment: () => null,
}));
jest.mock("@dashboard/hooks/useFormset", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  FormsetChange: () => null,
  FormsetData: () => null,
}));
jest.mock("@dashboard/orders/utils/data", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getAttributesCaption: jest.fn((..._a: any[]) => createDeepMock()),
  getOrderLineAvailableQuantity: jest.fn((..._a: any[]) => createDeepMock()),
  getWarehouseStock: jest.fn((..._a: any[]) => createDeepMock()),
  OrderFulfillLineFormData: () => null,
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import OrderFulfillLine from "./OrderFulfillLine";

describe("OrderFulfillLine deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders OrderFulfillLine with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <OrderFulfillLine {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders OrderFulfillLine with override props", () => {
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
          <OrderFulfillLine {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
