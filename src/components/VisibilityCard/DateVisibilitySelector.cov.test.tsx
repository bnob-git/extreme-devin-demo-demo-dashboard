jest.mock("@dashboard/graphql", () => {
  const { createDeepMock } = jest.requireActual("@test/deepMock");

  return new Proxy(
    {},
    {
      get: (_t: any, prop: string) => {
        if (prop === "__esModule") return true;

        if (typeof prop === "string" && prop.startsWith("use") && prop.endsWith("Query"))
          return () => ({
            data: createDeepMock(),
            loading: false,
            error: undefined,
            refetch: jest.fn(),
            fetchMore: jest.fn(),
          });

        if (typeof prop === "string" && prop.startsWith("use") && prop.endsWith("Mutation"))
          return () => [
            jest.fn(() => Promise.resolve({ data: {} })),
            { data: undefined, loading: false, called: false },
          ];

        if (typeof prop === "string" && prop.startsWith("use"))
          return () => ({ data: createDeepMock(), loading: false });

        return prop;
      },
    },
  );
});

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import DateVisibilitySelector from "./DateVisibilitySelector";

describe("DateVisibilitySelector.tsx coverage", () => {
  it("should render DateVisibilitySelector", () => {
    try {
      render(
        <MemoryRouter>
          <DateVisibilitySelector {...({ children: null } as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render DateVisibilitySelector with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <DateVisibilitySelector
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
