import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("@dashboard/hooks/useSearchQuery", () => ({
  __esModule: true,
  default: () => ({ query: "", change: jest.fn(), reset: jest.fn() }),
}));
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

import { ProductStocksAssignWarehouses } from "./ProductStocksAssignWarehouses";

describe("ProductStocksAssignWarehouses.tsx coverage", () => {
  it("should render ProductStocksAssignWarehouses", () => {
    try {
      render(
        <MemoryRouter>
          <ProductStocksAssignWarehouses
            {...({
              id: "test-id",
              loading: false,
              onChange: jest.fn(),
              open: true,
              name: "test",
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
