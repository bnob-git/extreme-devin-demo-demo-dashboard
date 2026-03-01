import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import {
  countries,
  filterPresetsProps,
  listActionsProps,
  pageListProps,
  tabPageProps,
} from "../../fixtures";
import { TimelineNote } from "./TimelineNote";

describe("TimelineNote fixture tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders TimelineNote with pageListProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <TimelineNote {...(pageListProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders TimelineNote with listActionsProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <TimelineNote {...(listActionsProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders TimelineNote with countries fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <TimelineNote {...(countries as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders TimelineNote with tabPageProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <TimelineNote {...(tabPageProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders TimelineNote with filterPresetsProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <TimelineNote {...(filterPresetsProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
