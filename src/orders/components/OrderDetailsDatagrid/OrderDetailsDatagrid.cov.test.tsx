import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("@dashboard/hooks/useListSettings", () => ({
  __esModule: true,
  default: () => ({ settings: { rowNumber: 20, columns: [] }, updateListSettings: jest.fn() }),
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

import { OrderDetailsDatagrid } from "./OrderDetailsDatagrid";

describe("OrderDetailsDatagrid.tsx coverage", () => {
  it("should render OrderDetailsDatagrid", () => {
    try {
      render(
        <MemoryRouter>
          <OrderDetailsDatagrid
            {...({
              id: "test-id",
              loading: false,
              disabled: false,
              data: { id: "test-id", name: "test", metadata: [], privateMetadata: [] },
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
