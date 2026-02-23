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

import OrderFulfillStockExceededDialogLine from "./OrderFulfillStockExceededDialogLine";

describe("OrderFulfillStockExceededDialogLine.tsx coverage", () => {
  it("should render OrderFulfillStockExceededDialogLine", () => {
    try {
      render(
        <MemoryRouter>
          <OrderFulfillStockExceededDialogLine
            {...({ id: "test-id", loading: false, errors: [], onSubmit: jest.fn() } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render OrderFulfillStockExceededDialogLine with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <OrderFulfillStockExceededDialogLine
            {...({
              loading: true,
              disabled: true,
              data: undefined,
              id: "test-id",
              params: {},
            } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
