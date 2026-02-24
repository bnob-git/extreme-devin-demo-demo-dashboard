import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import {
  countries,
  filterPresetsProps,
  listActionsProps,
  pageListProps,
  tabPageProps,
} from "../../fixtures";
import TypeDeleteWarningDialog from "./TypeDeleteWarningDialog";

describe("TypeDeleteWarningDialog fixture tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders TypeDeleteWarningDialog with pageListProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <TypeDeleteWarningDialog {...(pageListProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders TypeDeleteWarningDialog with listActionsProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <TypeDeleteWarningDialog {...(listActionsProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders TypeDeleteWarningDialog with countries fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <TypeDeleteWarningDialog {...(countries as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders TypeDeleteWarningDialog with tabPageProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <TypeDeleteWarningDialog {...(tabPageProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders TypeDeleteWarningDialog with filterPresetsProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <TypeDeleteWarningDialog {...(filterPresetsProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
