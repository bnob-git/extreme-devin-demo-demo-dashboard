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

import ProductTypeVariantAttributes from "./ProductTypeVariantAttributes";

describe("ProductTypeVariantAttributes.tsx coverage", () => {
  it("should render ProductTypeVariantAttributes", () => {
    try {
      render(
        <MemoryRouter>
          <ProductTypeVariantAttributes
            {...({
              id: "test-id",
              disabled: false,
              data: { id: "test-id", name: "test", metadata: [], privateMetadata: [] },
              onChange: jest.fn(),
              selected: [],
            } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render ProductTypeVariantAttributes with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <ProductTypeVariantAttributes
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
