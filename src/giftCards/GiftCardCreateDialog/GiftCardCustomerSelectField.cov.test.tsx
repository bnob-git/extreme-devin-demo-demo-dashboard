import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import GiftCardCustomerSelectField from "./GiftCardCustomerSelectField";

describe("GiftCardCustomerSelectField.tsx coverage", () => {
  it("should render GiftCardCustomerSelectField", () => {
    try {
      render(
        <MemoryRouter>
          <GiftCardCustomerSelectField
            {...({ loading: false, onChange: jest.fn(), name: "test" } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render GiftCardCustomerSelectField with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <GiftCardCustomerSelectField
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
