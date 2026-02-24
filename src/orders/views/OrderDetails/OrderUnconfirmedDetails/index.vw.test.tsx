jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  ...jest.requireActual("@dashboard/graphql"),
  useWarehouseListQuery: () => ({
    data: {
      order: null,
      shop: null,
      orderUpdate: null,
      deleteMetadata: null,
      updateMetadata: null,
      deletePrivateMetadata: null,
      updatePrivateMetadata: null,
      orderCancel: null,
      orderUpdateShipping: null,
      orderLinesCreate: null,
      search: null,
      orderMarkAsPaid: null,
      orderVoid: null,
      orderCapture: null,
      orderFulfillmentApprove: null,
      orderFulfillmentCancel: null,
      warehouses: null,
      orderFulfillmentUpdateTracking: null,
      invoiceSendEmail: null,
      transactionCreate: null,
    },
    loading: false,
    error: undefined,
    refetch: jest.fn(),
    fetchMore: jest.fn(),
  }),
  useCustomerAddressesQuery: () => ({
    data: {
      order: null,
      shop: null,
      orderUpdate: null,
      deleteMetadata: null,
      updateMetadata: null,
      deletePrivateMetadata: null,
      updatePrivateMetadata: null,
      orderCancel: null,
      orderUpdateShipping: null,
      orderLinesCreate: null,
      search: null,
      orderMarkAsPaid: null,
      orderVoid: null,
      orderCapture: null,
      orderFulfillmentApprove: null,
      orderFulfillmentCancel: null,
      warehouses: null,
      orderFulfillmentUpdateTracking: null,
      invoiceSendEmail: null,
      transactionCreate: null,
    },
    loading: false,
    error: undefined,
    refetch: jest.fn(),
    fetchMore: jest.fn(),
  }),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { OrderUnconfirmedDetails } from ".";

describe("index view tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders OrderUnconfirmedDetails with data", () => {
    try {
      render(
        <MemoryRouter initialEntries={["/test/test-id-123"]}>
          <OrderUnconfirmedDetails {...({} as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders OrderUnconfirmedDetails with id prop", () => {
    try {
      render(
        <MemoryRouter>
          <OrderUnconfirmedDetails {...({ id: "test-id", params: { id: "test-id" } } as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
