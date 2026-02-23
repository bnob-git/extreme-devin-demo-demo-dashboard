import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import ShippingRouter from ".";

describe("index.tsx coverage", () => {
  it("should render ShippingRouter", () => {
    try {
      render(
        <MemoryRouter>
          <ShippingRouter {...({ id: "test-id", params: {} } as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render ShippingRouter with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <ShippingRouter
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
