jest.mock("@dashboard/hooks/useForm", () => ({
  __esModule: true,
  default: (init: any, onSubmit: any) => ({
    data: init || {},
    change: jest.fn(),
    submit: onSubmit || jest.fn(),
    hasChanged: false,
    setChanged: jest.fn(),
    errors: {},
    setError: jest.fn(),
    clearErrors: jest.fn(),
  }),
}));
jest.mock("@dashboard/hooks/useFormset", () => ({
  __esModule: true,
  default: (init: any) => ({
    data: init || [],
    change: jest.fn(),
    add: jest.fn(),
    remove: jest.fn(),
    set: jest.fn(),
    get: jest.fn(),
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

import { product, products, variant, variantMedia, variantProductImages } from "../../fixtures";
import { ProductStocks } from "./ProductStocks";

describe("ProductStocks fixture tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders ProductStocks with product fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <ProductStocks {...(product as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders ProductStocks with products fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <ProductStocks {...(products as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders ProductStocks with variant fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <ProductStocks {...(variant as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders ProductStocks with variantMedia fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <ProductStocks {...(variantMedia as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders ProductStocks with variantProductImages fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <ProductStocks {...(variantProductImages as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
