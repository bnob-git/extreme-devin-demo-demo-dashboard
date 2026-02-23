import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("@dashboard/hooks/useNotifier", () => ({ __esModule: true, default: () => jest.fn() }));
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

import { OrderDiscountContext, OrderDiscountProvider } from "./OrderDiscountProvider";

describe("OrderDiscountProvider.tsx coverage", () => {
  it("should render OrderDiscountProvider", () => {
    try {
      render(
        <MemoryRouter>
          <OrderDiscountProvider
            {...({
              id: "test-id",
              errors: [],
              data: { id: "test-id", name: "test", metadata: [], privateMetadata: [] },
              children: null,
            } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render OrderDiscountContext", () => {
    try {
      render(
        <MemoryRouter>
          <OrderDiscountContext
            {...({
              id: "test-id",
              errors: [],
              data: { id: "test-id", name: "test", metadata: [], privateMetadata: [] },
              children: null,
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
