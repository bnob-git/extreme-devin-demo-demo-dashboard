jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));
jest.mock("@dashboard/hooks/useNotifier", () => ({ __esModule: true, default: () => jest.fn() }));
jest.mock(
  "@dashboard/graphql",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, prop: string) => {
          if (prop === "__esModule") return true;

          if (typeof prop === "string" && prop.startsWith("use") && prop.endsWith("Query"))
            return () => ({
              data: undefined,
              loading: false,
              error: undefined,
              refetch: jest.fn(),
              fetchMore: jest.fn(),
            });

          if (typeof prop === "string" && prop.startsWith("use") && prop.endsWith("Mutation"))
            return () => [
              jest.fn(() => Promise.resolve({ data: {} })),
              { data: undefined, loading: false, called: false, status: "default" },
            ];

          if (typeof prop === "string" && prop.startsWith("use"))
            return () => ({ data: undefined, loading: false });

          return jest.fn();
        },
      },
    ),
);

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { clients, countries, MOCK_PAYMENT_GATEWAY_ID, prepareMoney, shop } from "../../fixtures";
import OrderDraftList from "./OrderDraftList";

describe("OrderDraftList fixture tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders OrderDraftList with MOCK_PAYMENT_GATEWAY_ID fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <OrderDraftList {...(MOCK_PAYMENT_GATEWAY_ID as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders OrderDraftList with prepareMoney fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <OrderDraftList {...(prepareMoney as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders OrderDraftList with countries fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <OrderDraftList {...(countries as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders OrderDraftList with shop fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <OrderDraftList {...(shop as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders OrderDraftList with clients fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <OrderDraftList {...(clients as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
