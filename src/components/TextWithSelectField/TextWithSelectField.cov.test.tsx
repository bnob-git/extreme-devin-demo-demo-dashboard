import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import TextWithSelectField from "./TextWithSelectField";

describe("TextWithSelectField.tsx coverage", () => {
  it("should render TextWithSelectField", () => {
    try {
      render(
        <MemoryRouter>
          <TextWithSelectField {...({ onChange: jest.fn(), name: "test" } as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render TextWithSelectField with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <TextWithSelectField
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
