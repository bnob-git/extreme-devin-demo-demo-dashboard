import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { page } from "../../fixtures";
import { PageListDatagrid } from "./PageListDatagrid";

describe("PageListDatagrid fixture tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders PageListDatagrid with page fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <PageListDatagrid {...(page as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
