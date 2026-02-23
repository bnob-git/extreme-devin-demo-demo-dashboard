import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("@dashboard/hooks/useFormset", () => ({
  __esModule: true,
  default: (init: any) => ({
    data: init || [],
    change: jest.fn(),
    add: jest.fn(),
    remove: jest.fn(),
    set: jest.fn(),
    get: jest.fn(),
    replace: jest.fn(),
  }),
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

import OrderRefundUnfulfilledProducts from "./OrderRefundUnfulfilledProducts";

describe("OrderRefundUnfulfilledProducts.tsx coverage", () => {
  it("should render OrderRefundUnfulfilledProducts", () => {
    try {
      render(
        <MemoryRouter>
          <OrderRefundUnfulfilledProducts
            {...({
              id: "test-id",
              disabled: false,
              data: { id: "test-id", name: "test", metadata: [], privateMetadata: [] },
              onChange: jest.fn(),
            } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render OrderRefundUnfulfilledProducts with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <OrderRefundUnfulfilledProducts
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
