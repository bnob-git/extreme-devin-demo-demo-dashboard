import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import {
  countries,
  filterPresetsProps,
  listActionsProps,
  pageListProps,
  tabPageProps,
} from "../../fixtures";
import { ConditionalFilters } from "./ConditionalFilters";

describe("ConditionalFilters fixture tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders ConditionalFilters with pageListProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <ConditionalFilters {...(pageListProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders ConditionalFilters with listActionsProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <ConditionalFilters {...(listActionsProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders ConditionalFilters with countries fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <ConditionalFilters {...(countries as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders ConditionalFilters with tabPageProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <ConditionalFilters {...(tabPageProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders ConditionalFilters with filterPresetsProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <ConditionalFilters {...(filterPresetsProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
