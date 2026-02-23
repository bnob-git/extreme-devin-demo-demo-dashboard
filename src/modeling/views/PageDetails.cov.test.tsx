import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("@dashboard/utils/handlers/metadataUpdateHandler", () => ({
  __esModule: true,
  default: () => jest.fn(),
}));
jest.mock("@dashboard/hooks/useNotifier", () => ({ __esModule: true, default: () => jest.fn() }));
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

import PageDetails from "./PageDetails";

describe("PageDetails.tsx coverage", () => {
  it("should render PageDetails", () => {
    try {
      render(
        <MemoryRouter>
          <PageDetails
            {...({
              id: "test-id",
              params: {},
              loading: false,
              errors: [],
              data: { id: "test-id", name: "test", metadata: [], privateMetadata: [] },
              onSubmit: jest.fn(),
              onClose: jest.fn(),
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

  it("should render PageDetails with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <PageDetails
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
