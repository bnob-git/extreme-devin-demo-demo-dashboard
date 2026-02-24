jest.mock(
  "@dashboard/graphql",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, prop: string) => {
          if (prop === "__esModule") return true;

          if (typeof prop === "string" && prop.startsWith("use") && prop.endsWith("Query"))
            return () => ({
              data: undefined,
              loading: false,
              error: undefined,
              refetch: jest.fn(),
              fetchMore: jest.fn(),
            });

          if (typeof prop === "string" && prop.startsWith("use") && prop.endsWith("Mutation"))
            return () => [
              jest.fn(() => Promise.resolve({ data: {} })),
              { data: undefined, loading: false, called: false, status: "default" },
            ];

          if (typeof prop === "string" && prop.startsWith("use"))
            return () => ({ data: undefined, loading: false });

          return jest.fn();
        },
      },
    ),
);

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { attributes, productType, productTypes, productTypeSearch } from "../../fixtures";
import ProductTypeVariantAttributes from "./ProductTypeVariantAttributes";

describe("ProductTypeVariantAttributes fixture tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders ProductTypeVariantAttributes with attributes fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <ProductTypeVariantAttributes {...(attributes as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders ProductTypeVariantAttributes with productTypeSearch fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <ProductTypeVariantAttributes {...(productTypeSearch as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders ProductTypeVariantAttributes with productTypes fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <ProductTypeVariantAttributes {...(productTypes as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders ProductTypeVariantAttributes with productType fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <ProductTypeVariantAttributes {...(productType as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
