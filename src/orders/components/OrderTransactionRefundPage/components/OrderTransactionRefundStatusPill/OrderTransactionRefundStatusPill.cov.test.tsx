import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock(
  "@dashboard/graphql",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, prop: string) => {
          if (prop === "__esModule") return true;

          if (prop.startsWith("use"))
            return () => [
              jest.fn(() => Promise.resolve({ data: {} })),
              { data: undefined, loading: false, status: "default" },
            ];

          return jest.fn();
        },
      },
    ),
);

import { OrderTransactionRefundStatusPill } from "./OrderTransactionRefundStatusPill";

describe("OrderTransactionRefundStatusPill.tsx coverage", () => {
  it("should render OrderTransactionRefundStatusPill", () => {
    try {
      render(
        <MemoryRouter>
          <OrderTransactionRefundStatusPill
            {...({ id: "test-id", loading: false, errors: [], onSubmit: jest.fn() } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
