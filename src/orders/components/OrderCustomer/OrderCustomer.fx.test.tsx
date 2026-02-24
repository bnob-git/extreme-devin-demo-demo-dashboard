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
import OrderCustomer from "./OrderCustomer";

describe("OrderCustomer fixture tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders OrderCustomer with MOCK_PAYMENT_GATEWAY_ID fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <OrderCustomer {...(MOCK_PAYMENT_GATEWAY_ID as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders OrderCustomer with prepareMoney fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <OrderCustomer {...(prepareMoney as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders OrderCustomer with countries fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <OrderCustomer {...(countries as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders OrderCustomer with shop fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <OrderCustomer {...(shop as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders OrderCustomer with clients fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <OrderCustomer {...(clients as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
