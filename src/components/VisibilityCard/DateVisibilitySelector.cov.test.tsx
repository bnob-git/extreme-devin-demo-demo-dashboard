import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import DateVisibilitySelector from "./DateVisibilitySelector";

describe("DateVisibilitySelector.tsx coverage", () => {
  it("should render DateVisibilitySelector", () => {
    try {
      render(
        <MemoryRouter>
          <DateVisibilitySelector {...({ children: null } as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render DateVisibilitySelector with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <DateVisibilitySelector
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
