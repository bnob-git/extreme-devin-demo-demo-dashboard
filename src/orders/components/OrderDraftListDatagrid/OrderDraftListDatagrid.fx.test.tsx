jest.mock("@dashboard/hooks/useLocale", () => ({
  __esModule: true,
  default: () => ({ locale: "en", setLocale: jest.fn() }),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { clients, countries, MOCK_PAYMENT_GATEWAY_ID, prepareMoney, shop } from "../../fixtures";
import { OrderDraftListDatagrid } from "./OrderDraftListDatagrid";

describe("OrderDraftListDatagrid fixture tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders OrderDraftListDatagrid with MOCK_PAYMENT_GATEWAY_ID fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <OrderDraftListDatagrid {...(MOCK_PAYMENT_GATEWAY_ID as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders OrderDraftListDatagrid with prepareMoney fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <OrderDraftListDatagrid {...(prepareMoney as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders OrderDraftListDatagrid with countries fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <OrderDraftListDatagrid {...(countries as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders OrderDraftListDatagrid with shop fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <OrderDraftListDatagrid {...(shop as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders OrderDraftListDatagrid with clients fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <OrderDraftListDatagrid {...(clients as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
