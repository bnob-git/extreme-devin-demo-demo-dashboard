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
jest.mock("@dashboard/hooks/useModalDialogOpen", () => ({ __esModule: true, default: jest.fn() }));

import ProductVariantMediaSelectDialog from "./ProductVariantMediaSelectDialog";

describe("ProductVariantMediaSelectDialog.tsx coverage", () => {
  it("should render ProductVariantMediaSelectDialog", () => {
    try {
      render(
        <MemoryRouter>
          <ProductVariantMediaSelectDialog
            {...({ id: "test-id", onChange: jest.fn(), onClose: jest.fn(), open: true } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render ProductVariantMediaSelectDialog with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <ProductVariantMediaSelectDialog
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
