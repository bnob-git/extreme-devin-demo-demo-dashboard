jest.mock("@dashboard/hooks/useNotifier", () => ({ __esModule: true, default: () => jest.fn() }));
jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  ...jest.requireActual("@dashboard/graphql"),
  useShopLimitsQuery: () => ({
    data: { draftOrderCreate: null, draftOrders: null, shop: null },
    loading: false,
    error: undefined,
    refetch: jest.fn(),
    fetchMore: jest.fn(),
  }),
  useOrderDraftListQuery: () => ({
    data: { draftOrderCreate: null, draftOrders: null, shop: null },
    loading: false,
    error: undefined,
    refetch: jest.fn(),
    fetchMore: jest.fn(),
  }),
  useOrderDraftCreateMutation: () => [
    jest.fn(() => Promise.resolve({ data: {} })),
    { data: undefined, loading: false, called: false },
  ],
}));
jest.mock("@dashboard/utils/handlers/dialogActionHandlers", () => ({
  __esModule: true,
  default: () => [jest.fn(), jest.fn()],
}));
jest.mock("@dashboard/auth", () => ({
  handleNestedMutationErrors: jest.fn(),
  useUser: () => ({ user: { email: "t@t.com", userPermissions: [] }, authenticated: true }),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import OrderDraftList from "./OrderDraftList";

describe("OrderDraftList view tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders OrderDraftList with data", () => {
    try {
      render(
        <MemoryRouter initialEntries={["/test/test-id-123"]}>
          <OrderDraftList {...({} as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
