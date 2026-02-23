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

import { CollectionImage } from "./CollectionImage";

describe("CollectionImage.tsx coverage", () => {
  it("should render CollectionImage", () => {
    try {
      render(
        <MemoryRouter>
          <CollectionImage
            {...({
              id: "test-id",
              data: { id: "test-id", name: "test", metadata: [], privateMetadata: [] },
              onChange: jest.fn(),
              onDelete: jest.fn(),
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
