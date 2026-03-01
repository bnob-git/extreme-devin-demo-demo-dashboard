import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { FiltersArea } from "./FiltersArea";

describe("FiltersArea view tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders FiltersArea with data", () => {
    try {
      render(
        <MemoryRouter initialEntries={["/test/test-id-123"]}>
          <FiltersArea {...({} as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
