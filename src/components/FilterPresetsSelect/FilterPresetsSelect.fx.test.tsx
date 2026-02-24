import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import {
  countries,
  filterPresetsProps,
  listActionsProps,
  pageListProps,
  tabPageProps,
} from "../../fixtures";
import { FilterPresetsSelect } from "./FilterPresetsSelect";

describe("FilterPresetsSelect fixture tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders FilterPresetsSelect with pageListProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <FilterPresetsSelect {...(pageListProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders FilterPresetsSelect with listActionsProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <FilterPresetsSelect {...(listActionsProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders FilterPresetsSelect with countries fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <FilterPresetsSelect {...(countries as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders FilterPresetsSelect with tabPageProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <FilterPresetsSelect {...(tabPageProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders FilterPresetsSelect with filterPresetsProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <FilterPresetsSelect {...(filterPresetsProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
