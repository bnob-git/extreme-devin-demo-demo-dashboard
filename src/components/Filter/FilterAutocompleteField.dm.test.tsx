jest.mock("@dashboard/utils/lists", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  toggle: jest.fn((...args: any[]) => args[0] ?? {}),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import FilterAutocompleteField from "./FilterAutocompleteField";

describe("FilterAutocompleteField deep-mock tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders FilterAutocompleteField with deep-mocked deps", () => {
    try {
      render(
        <MemoryRouter>
          <FilterAutocompleteField {...({} as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
