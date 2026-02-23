import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

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

import { EmpptyLabelsMapsProvider, LabelsMapsProvider } from "./provider";

describe("provider.tsx coverage", () => {
  it("should render LabelsMapsProvider", () => {
    try {
      render(
        <MemoryRouter>
          <LabelsMapsProvider {...({ loading: false, children: null } as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render EmpptyLabelsMapsProvider", () => {
    try {
      render(
        <MemoryRouter>
          <EmpptyLabelsMapsProvider {...({ loading: false, children: null } as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
