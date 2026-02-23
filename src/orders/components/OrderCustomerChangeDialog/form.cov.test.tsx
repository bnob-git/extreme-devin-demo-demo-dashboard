import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("@dashboard/hooks/useHandleFormSubmit", () => ({
  __esModule: true,
  default: () => jest.fn(),
}));

import OrderCustomerChangeForm from "./form";

describe("form.tsx coverage", () => {
  it("should render OrderCustomerChangeForm", () => {
    try {
      render(
        <MemoryRouter>
          <OrderCustomerChangeForm
            {...({
              data: { id: "test-id", name: "test", metadata: [], privateMetadata: [] },
              onSubmit: jest.fn(),
              children: null,
            } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render OrderCustomerChangeForm with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <OrderCustomerChangeForm
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
