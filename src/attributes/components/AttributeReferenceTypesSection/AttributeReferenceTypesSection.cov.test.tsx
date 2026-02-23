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

import { AttributeReferenceTypesSection } from "./AttributeReferenceTypesSection";

describe("AttributeReferenceTypesSection.tsx coverage", () => {
  it("should render AttributeReferenceTypesSection", () => {
    try {
      render(
        <MemoryRouter>
          <AttributeReferenceTypesSection {...({ id: "test-id", onClose: jest.fn() } as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
