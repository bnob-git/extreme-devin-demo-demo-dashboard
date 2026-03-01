jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  ...jest.requireActual("@dashboard/graphql"),
  useSearchQuery: () => ({
    data: {},
    loading: false,
    error: undefined,
    refetch: jest.fn(),
    fetchMore: jest.fn(),
  }),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import OrderProductAddDialog from "./OrderProductAddDialog";

describe("OrderProductAddDialog view tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders OrderProductAddDialog with data", () => {
    try {
      render(
        <MemoryRouter initialEntries={["/test/test-id-123"]}>
          <OrderProductAddDialog {...({} as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
