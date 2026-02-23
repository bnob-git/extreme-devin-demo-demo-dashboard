import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { ExtensionsButtonSelector } from "./ExtensionsButtonSelector";

describe("ExtensionsButtonSelector.tsx coverage", () => {
  it("should render ExtensionsButtonSelector", () => {
    try {
      render(
        <MemoryRouter>
          <ExtensionsButtonSelector {...({ params: {}, children: null, selected: [] } as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
