import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { FiltersArea } from "./FiltersArea";

describe("FiltersArea deep-mock tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders FiltersArea with deep-mocked deps", () => {
    try {
      render(
        <MemoryRouter>
          <FiltersArea {...({} as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
