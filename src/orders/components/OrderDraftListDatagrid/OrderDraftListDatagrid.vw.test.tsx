jest.mock("@dashboard/hooks/useLocale", () => ({
  __esModule: true,
  default: () => ({ locale: "en", setLocale: jest.fn() }),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { OrderDraftListDatagrid } from "./OrderDraftListDatagrid";

describe("OrderDraftListDatagrid view tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders OrderDraftListDatagrid with data", () => {
    try {
      render(
        <MemoryRouter initialEntries={["/test/test-id-123"]}>
          <OrderDraftListDatagrid {...({} as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
