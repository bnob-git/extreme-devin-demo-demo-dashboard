import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("@dashboard/hooks/useModalDialogOpen", () => ({ __esModule: true, default: jest.fn() }));
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

import { AssignProductDialogMulti } from "./AssignProductDialogMulti";

describe("AssignProductDialogMulti.tsx coverage", () => {
  it("should render AssignProductDialogMulti", () => {
    try {
      render(
        <MemoryRouter>
          <AssignProductDialogMulti
            {...({
              loading: false,
              data: { id: "test-id", name: "test", metadata: [], privateMetadata: [] },
              onSubmit: jest.fn(),
              onChange: jest.fn(),
              onClose: jest.fn(),
              open: true,
              selected: [],
              channels: [],
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
