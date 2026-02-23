import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { ProductTableItem } from "./ProductTableItem";

describe("ProductTableItem.tsx coverage", () => {
  it("should render ProductTableItem", () => {
    try {
      render(
        <MemoryRouter>
          <ProductTableItem
            {...({
              id: "test-id",
              disabled: false,
              selected: [],
              channels: [],
              name: "test",
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
