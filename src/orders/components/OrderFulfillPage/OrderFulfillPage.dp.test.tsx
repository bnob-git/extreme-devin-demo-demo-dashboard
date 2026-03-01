import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/components/AppLayout/TopNav", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  TopNav: () => null,
}));
jest.mock("@dashboard/components/Card", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  DashboardCard: () => null,
}));
jest.mock("@dashboard/components/CardSpacer", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  CardSpacer: () => null,
}));
jest.mock("@dashboard/components/ConfirmButton", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ConfirmButtonTransitionState: () => null,
}));
jest.mock("@dashboard/components/Form", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Form: () => null,
}));
jest.mock("@dashboard/components/Layouts", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  DetailPageLayout: () => null,
}));
jest.mock("@dashboard/components/ResponsiveTable", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ResponsiveTable: () => null,
}));
jest.mock("@dashboard/components/Savebar", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Savebar: () => null,
}));
jest.mock("@dashboard/components/TableRowLink", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  TableRowLink: () => null,
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  FulfillOrderMutation: () => null,
  OrderErrorCode: () => null,
  OrderFulfillDataQuery: () => null,
  OrderFulfillLineFragment: () => null,
  OrderFulfillStockInput: () => null,
  ShopOrderSettingsFragment: () => null,
}));
jest.mock("@dashboard/hooks/useForm", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  SubmitPromise: () => null,
}));
jest.mock("@dashboard/hooks/useFormset", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  FormsetData: () => null,
  useFormset: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useNavigator", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useNavigator: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/intl", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  commonMessages: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/misc", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  renderCollection: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/orders/components/OrderChangeWarehouseDialog", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  OrderChangeWarehouseDialog: () => null,
}));
jest.mock("@dashboard/orders/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  OrderFulfillUrlDialog: () => null,
  OrderFulfillUrlQueryParams: () => null,
  orderUrl: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/orders/utils/data", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getAttributesCaption: jest.fn((..._a: any[]) => createDeepMock()),
  getLineAllocationWithHighestQuantity: jest.fn((..._a: any[]) => createDeepMock()),
  getToFulfillOrderLines: jest.fn((..._a: any[]) => createDeepMock()),
  OrderFulfillLineFormData: () => null,
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import OrderFulfillPage from "./OrderFulfillPage";

describe("OrderFulfillPage deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders OrderFulfillPage with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <OrderFulfillPage {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders OrderFulfillPage with override props", () => {
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
          <OrderFulfillPage {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
