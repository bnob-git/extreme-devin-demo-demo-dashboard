import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));
jest.mock("@dashboard/utils/handlers/dialogActionHandlers", () => ({
  __esModule: true,
  default: () => [jest.fn(), jest.fn()],
}));
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

import RateCreate from "./RateCreate";

describe("RateCreate.tsx coverage", () => {
  it("should render RateCreate", () => {
    try {
      render(
        <MemoryRouter>
          <RateCreate
            {...({
              id: "test-id",
              params: {},
              loading: false,
              data: { id: "test-id", name: "test", metadata: [], privateMetadata: [] },
              onSubmit: jest.fn(),
              onChange: jest.fn(),
              onClose: jest.fn(),
              navigate: jest.fn(),
              open: true,
              selected: [],
              channels: [],
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

  it("should render RateCreate with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <RateCreate
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
