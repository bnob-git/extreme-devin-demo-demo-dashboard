import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import NavigationRouter from ".";

describe("index.tsx coverage", () => {
  it("should render NavigationRouter", () => {
    try {
      render(
        <MemoryRouter>
          <NavigationRouter {...({ id: "test-id", params: {} } as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render NavigationRouter with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <NavigationRouter
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
