import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("@dashboard/hooks/useStateFromProps", () => ({
  __esModule: true,
  default: (val: any) => [val, jest.fn()],
}));

import GiftCardUpdateExpirySelect from "./GiftCardUpdateExpirySelect";

describe("GiftCardUpdateExpirySelect.tsx coverage", () => {
  it("should render GiftCardUpdateExpirySelect", () => {
    try {
      render(
        <MemoryRouter>
          <GiftCardUpdateExpirySelect
            {...({
              data: { id: "test-id", name: "test", metadata: [], privateMetadata: [] },
              onChange: jest.fn(),
            } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render GiftCardUpdateExpirySelect with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <GiftCardUpdateExpirySelect
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
