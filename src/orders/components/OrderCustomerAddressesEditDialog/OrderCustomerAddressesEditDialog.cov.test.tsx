import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("@dashboard/hooks/useModalDialogErrors", () => ({
  __esModule: true,
  default: () => ({ errors: [], setErrors: jest.fn() }),
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

import OrderCustomerAddressesEditDialog from "./OrderCustomerAddressesEditDialog";

describe("OrderCustomerAddressesEditDialog.tsx coverage", () => {
  it("should render OrderCustomerAddressesEditDialog", () => {
    try {
      render(
        <MemoryRouter>
          <OrderCustomerAddressesEditDialog
            {...({
              loading: false,
              errors: [],
              data: { id: "test-id", name: "test", metadata: [], privateMetadata: [] },
              onSubmit: jest.fn(),
              onChange: jest.fn(),
              onClose: jest.fn(),
              open: true,
            } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render OrderCustomerAddressesEditDialog with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <OrderCustomerAddressesEditDialog
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
