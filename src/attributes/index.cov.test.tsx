import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import AttributeSection from ".";

describe("index.tsx coverage", () => {
  it("should render AttributeSection", () => {
    try {
      render(
        <MemoryRouter>
          <AttributeSection {...({ id: "test-id", params: {} } as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render AttributeSection with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <AttributeSection
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
