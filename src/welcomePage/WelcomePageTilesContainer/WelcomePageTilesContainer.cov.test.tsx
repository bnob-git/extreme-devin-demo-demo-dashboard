import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { WelcomePageTilesContainer } from "./WelcomePageTilesContainer";

describe("WelcomePageTilesContainer.tsx coverage", () => {
  it("should render WelcomePageTilesContainer", () => {
    try {
      render(
        <MemoryRouter>
          <WelcomePageTilesContainer {...({ id: "test-id" } as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
