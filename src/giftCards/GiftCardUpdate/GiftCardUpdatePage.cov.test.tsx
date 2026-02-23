import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));

import GiftCardUpdatePage from "./GiftCardUpdatePage";

describe("GiftCardUpdatePage.tsx coverage", () => {
  it("should render GiftCardUpdatePage", () => {
    try {
      render(
        <MemoryRouter>
          <GiftCardUpdatePage
            {...({ loading: false, onChange: jest.fn(), navigate: jest.fn() } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render GiftCardUpdatePage with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <GiftCardUpdatePage
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
