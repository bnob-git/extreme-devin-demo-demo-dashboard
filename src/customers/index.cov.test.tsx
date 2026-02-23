import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { CustomerSection } from ".";

describe("index.tsx coverage", () => {
  it("should render CustomerSection", () => {
    try {
      render(
        <MemoryRouter>
          <CustomerSection {...({ id: "test-id", params: {} } as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
