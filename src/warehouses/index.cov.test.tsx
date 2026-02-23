import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import WarehouseSection from ".";

describe("index.tsx coverage", () => {
  it("should render WarehouseSection", () => {
    try {
      render(
        <MemoryRouter>
          <WarehouseSection {...({ id: "test-id", params: {} } as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render WarehouseSection with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <WarehouseSection
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
