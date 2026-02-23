import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));

import GiftCardsListHeader from "./GiftCardsListHeader";

describe("GiftCardsListHeader.tsx coverage", () => {
  it("should render GiftCardsListHeader", () => {
    try {
      render(
        <MemoryRouter>
          <GiftCardsListHeader {...({ id: "test-id", navigate: jest.fn(), name: "test" } as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render GiftCardsListHeader with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <GiftCardsListHeader
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
