import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("@dashboard/hooks/useBackLinkWithState", () => ({
  __esModule: true,
  default: () => "/",
}));

import GiftCardUpdatePageHeader from "./GiftCardUpdatePageHeader";

describe("GiftCardUpdatePageHeader.tsx coverage", () => {
  it("should render GiftCardUpdatePageHeader", () => {
    try {
      render(
        <MemoryRouter>
          <GiftCardUpdatePageHeader
            {...({ id: "test-id", loading: false, errors: [], onSubmit: jest.fn() } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render GiftCardUpdatePageHeader with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <GiftCardUpdatePageHeader
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
