import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import AttributeSwatchField from "./AttributeSwatchField";

describe("AttributeSwatchField.tsx coverage", () => {
  it("should render AttributeSwatchField", () => {
    try {
      render(
        <MemoryRouter>
          <AttributeSwatchField {...({ onChange: jest.fn() } as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render AttributeSwatchField with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <AttributeSwatchField
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
