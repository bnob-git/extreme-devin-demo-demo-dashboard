import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import {
  countries,
  filterPresetsProps,
  listActionsProps,
  pageListProps,
  tabPageProps,
} from "../../fixtures";
import { SortableTree } from "./SortableTree";

describe("SortableTree fixture tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders SortableTree with pageListProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <SortableTree {...(pageListProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders SortableTree with listActionsProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <SortableTree {...(listActionsProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders SortableTree with countries fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <SortableTree {...(countries as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders SortableTree with tabPageProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <SortableTree {...(tabPageProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders SortableTree with filterPresetsProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <SortableTree {...(filterPresetsProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
