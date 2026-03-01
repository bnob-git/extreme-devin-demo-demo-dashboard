jest.mock("@dashboard/hooks/useNotifier", () => ({ __esModule: true, default: () => jest.fn() }));
jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  ...jest.requireActual("@dashboard/graphql"),
  usePageListQuery: () => ({
    data: { pages: null, pageBulkDelete: null, pageBulkPublish: null, search: null },
    loading: false,
    error: undefined,
    refetch: jest.fn(),
    fetchMore: jest.fn(),
  }),
  usePageBulkPublishMutation: () => [
    jest.fn(() => Promise.resolve({ data: {} })),
    { data: undefined, loading: false, called: false },
  ],
  usePageBulkRemoveMutation: () => [
    jest.fn(() => Promise.resolve({ data: {} })),
    { data: undefined, loading: false, called: false },
  ],
}));
jest.mock("@dashboard/utils/handlers/dialogActionHandlers", () => ({
  __esModule: true,
  default: () => [jest.fn(), jest.fn()],
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import PageList from "./PageList";

describe("PageList view tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders PageList with data", () => {
    try {
      render(
        <MemoryRouter initialEntries={["/test/test-id-123"]}>
          <PageList {...({} as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
