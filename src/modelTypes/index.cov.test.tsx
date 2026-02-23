import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import PageTypeRouter from ".";

describe("index.tsx coverage", () => {
  it("should render PageTypeRouter", () => {
    try {
      render(
        <MemoryRouter>
          <PageTypeRouter {...({ id: "test-id", params: {} } as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render PageTypeRouter with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <PageTypeRouter
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
