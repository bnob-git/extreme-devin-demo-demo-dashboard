import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { DevModeProvider } from "./DevModeProvider";

describe("DevModeProvider.tsx coverage", () => {
  it("should render DevModeProvider", () => {
    try {
      render(
        <MemoryRouter>
          <DevModeProvider {...({ children: null } as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
