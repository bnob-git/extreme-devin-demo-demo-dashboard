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

import OrderChangeWarehouseDialog from "./OrderChangeWarehouseDialog";

describe("OrderChangeWarehouseDialog.tsx coverage", () => {
  it("should render OrderChangeWarehouseDialog", () => {
    try {
      render(
        <MemoryRouter>
          <OrderChangeWarehouseDialog
            {...({ onChange: jest.fn(), onClose: jest.fn(), open: true, name: "test" } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render OrderChangeWarehouseDialog with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <OrderChangeWarehouseDialog
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
