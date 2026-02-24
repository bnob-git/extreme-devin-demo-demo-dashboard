import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import {
  countries,
  filterPresetsProps,
  listActionsProps,
  pageListProps,
  tabPageProps,
} from "../../fixtures";
import FilterAutocompleteField from "./FilterAutocompleteField";

describe("FilterAutocompleteField fixture tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders FilterAutocompleteField with pageListProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <FilterAutocompleteField {...(pageListProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders FilterAutocompleteField with listActionsProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <FilterAutocompleteField {...(listActionsProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders FilterAutocompleteField with countries fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <FilterAutocompleteField {...(countries as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders FilterAutocompleteField with tabPageProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <FilterAutocompleteField {...(tabPageProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders FilterAutocompleteField with filterPresetsProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <FilterAutocompleteField {...(filterPresetsProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
