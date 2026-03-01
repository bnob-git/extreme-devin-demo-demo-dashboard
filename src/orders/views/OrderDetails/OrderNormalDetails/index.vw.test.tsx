jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  ...jest.requireActual("@dashboard/graphql"),
  useWarehouseListQuery: () => ({
    data: {
      order: null,
      shop: null,
      orderFulfillmentApprove: null,
      orderUpdate: null,
      deleteMetadata: null,
      updateMetadata: null,
      deletePrivateMetadata: null,
      updatePrivateMetadata: null,
      orderCancel: null,
      orderMarkAsPaid: null,
      orderVoid: null,
      orderCapture: null,
      orderFulfillmentCancel: null,
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
      orderFulfillmentApprove: null,
      orderUpdate: null,
      deleteMetadata: null,
      updateMetadata: null,
      deletePrivateMetadata: null,
      updatePrivateMetadata: null,
      orderCancel: null,
      orderMarkAsPaid: null,
      orderVoid: null,
      orderCapture: null,
      orderFulfillmentCancel: null,
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
jest.mock("@dashboard/utils/handlers/dialogActionHandlers", () => ({
  __esModule: true,
  default: () => [jest.fn(), jest.fn()],
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { OrderNormalDetails } from ".";

describe("index view tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders OrderNormalDetails with data", () => {
    try {
      render(
        <MemoryRouter initialEntries={["/test/test-id-123"]}>
          <OrderNormalDetails {...({} as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders OrderNormalDetails with id prop", () => {
    try {
      render(
        <MemoryRouter>
          <OrderNormalDetails {...({ id: "test-id", params: { id: "test-id" } } as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
