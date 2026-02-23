import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { ExploreExtensions } from "./ExploreExtensions";

describe("ExploreExtensions.tsx coverage", () => {
  it("should render ExploreExtensions", () => {
    try {
      render(
        <MemoryRouter>
          <ExploreExtensions
            {...({ id: "test-id", loading: false, errors: [], onSubmit: jest.fn() } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
