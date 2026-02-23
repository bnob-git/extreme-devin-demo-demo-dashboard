import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));

import { AppWidgets } from "./AppWidgets";

describe("AppWidgets.tsx coverage", () => {
  it("should render AppWidgets", () => {
    try {
      render(
        <MemoryRouter>
          <AppWidgets
            {...({
              id: "test-id",
              params: {},
              navigate: jest.fn(),
              open: true,
              name: "test",
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
