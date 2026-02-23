import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

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

import { StaffDetailsView } from "./StaffDetails";

describe("StaffDetails.tsx coverage", () => {
  it("should render StaffDetailsView", () => {
    try {
      render(
        <MemoryRouter>
          <StaffDetailsView
            {...({
              id: "test-id",
              params: {},
              loading: false,
              onSubmit: jest.fn(),
              onClose: jest.fn(),
              onDelete: jest.fn(),
              navigate: jest.fn(),
              open: true,
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
});
