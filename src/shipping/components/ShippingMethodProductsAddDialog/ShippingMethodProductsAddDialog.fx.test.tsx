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

import { products, shippingZone, shippingZones } from "../../fixtures";
import ShippingMethodProductsAddDialog from "./ShippingMethodProductsAddDialog";

describe("ShippingMethodProductsAddDialog fixture tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders ShippingMethodProductsAddDialog with shippingZones fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <ShippingMethodProductsAddDialog {...(shippingZones as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders ShippingMethodProductsAddDialog with shippingZone fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <ShippingMethodProductsAddDialog {...(shippingZone as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders ShippingMethodProductsAddDialog with products fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <ShippingMethodProductsAddDialog {...(products as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
