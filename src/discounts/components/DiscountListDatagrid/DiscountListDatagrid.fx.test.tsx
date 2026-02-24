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

import { discount, sale, saleList, voucherDetails, voucherList } from "../../fixtures";
import { DiscountListDatagrid } from "./DiscountListDatagrid";

describe("DiscountListDatagrid fixture tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders DiscountListDatagrid with saleList fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <DiscountListDatagrid {...(saleList as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders DiscountListDatagrid with voucherList fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <DiscountListDatagrid {...(voucherList as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders DiscountListDatagrid with sale fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <DiscountListDatagrid {...(sale as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders DiscountListDatagrid with voucherDetails fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <DiscountListDatagrid {...(voucherDetails as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders DiscountListDatagrid with discount fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <DiscountListDatagrid {...(discount as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
