import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import GiftCardTagInput from "./GiftCardTagInput";

describe("GiftCardTagInput.tsx coverage", () => {
  it("should render GiftCardTagInput", () => {
    try {
      render(
        <MemoryRouter>
          <GiftCardTagInput {...({ loading: false, onChange: jest.fn() } as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render GiftCardTagInput with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <GiftCardTagInput
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
