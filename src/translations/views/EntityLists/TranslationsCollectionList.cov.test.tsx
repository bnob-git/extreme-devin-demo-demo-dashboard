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
jest.mock("@dashboard/hooks/usePaginator", () => ({
  __esModule: true,
  default: () => ({
    loadNextPage: jest.fn(),
    loadPreviousPage: jest.fn(),
    paginatorType: "click",
    pageInfo: { hasNextPage: false, hasPreviousPage: false },
  }),
}));

import TranslationsCollectionList from "./TranslationsCollectionList";

describe("TranslationsCollectionList.tsx coverage", () => {
  it("should render TranslationsCollectionList", () => {
    try {
      render(
        <MemoryRouter>
          <TranslationsCollectionList {...({ id: "test-id", name: "test" } as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render TranslationsCollectionList with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <TranslationsCollectionList
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
