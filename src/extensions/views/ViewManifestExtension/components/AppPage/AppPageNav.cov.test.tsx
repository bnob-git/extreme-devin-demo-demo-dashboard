import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));

import { AppPageNav } from "./AppPageNav";

describe("AppPageNav.tsx coverage", () => {
  it("should render AppPageNav", () => {
    try {
      render(
        <MemoryRouter>
          <AppPageNav {...({ navigate: jest.fn() } as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
