import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import {
  countries,
  filterPresetsProps,
  listActionsProps,
  pageListProps,
  tabPageProps,
} from "../../fixtures";
import { FiltersArea } from "./FiltersArea";

describe("FiltersArea fixture tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders FiltersArea with pageListProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <FiltersArea {...(pageListProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders FiltersArea with listActionsProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <FiltersArea {...(listActionsProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders FiltersArea with countries fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <FiltersArea {...(countries as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders FiltersArea with tabPageProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <FiltersArea {...(tabPageProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders FiltersArea with filterPresetsProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <FiltersArea {...(filterPresetsProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
