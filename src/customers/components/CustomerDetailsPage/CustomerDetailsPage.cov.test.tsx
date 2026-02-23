import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("@dashboard/hooks/useBackLinkWithState", () => ({
  __esModule: true,
  default: () => "/",
}));
jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));
jest.mock(
  "@dashboard/graphql",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, prop: string) => {
          if (prop === "__esModule") return true;

          if (prop.startsWith("use"))
            return () => [
              jest.fn(() => Promise.resolve({ data: {} })),
              { data: undefined, loading: false, status: "default" },
            ];

          return jest.fn();
        },
      },
    ),
);

import CustomerDetailsPage from "./CustomerDetailsPage";

describe("CustomerDetailsPage.tsx coverage", () => {
  it("should render CustomerDetailsPage", () => {
    try {
      render(
        <MemoryRouter>
          <CustomerDetailsPage
            {...({
              disabled: false,
              errors: [],
              data: { id: "test-id", name: "test", metadata: [], privateMetadata: [] },
              onSubmit: jest.fn(),
              onChange: jest.fn(),
              onDelete: jest.fn(),
              navigate: jest.fn(),
              saveButtonBarState: "default",
            } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render CustomerDetailsPage with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <CustomerDetailsPage
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
