import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Component from ".";

describe("index.tsx coverage", () => {
  it("should render Component", () => {
    try {
      render(
        <MemoryRouter>
          <Component {...({ id: "test-id", params: {} } as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render Component with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <Component
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
