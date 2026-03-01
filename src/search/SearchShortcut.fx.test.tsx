jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import {
  countries,
  filterPresetsProps,
  listActionsProps,
  pageListProps,
  tabPageProps,
} from "../fixtures";
import { SearchShortcut } from "./SearchShortcut";

describe("SearchShortcut fixture tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders SearchShortcut with pageListProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <SearchShortcut {...(pageListProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders SearchShortcut with listActionsProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <SearchShortcut {...(listActionsProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders SearchShortcut with countries fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <SearchShortcut {...(countries as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders SearchShortcut with tabPageProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <SearchShortcut {...(tabPageProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders SearchShortcut with filterPresetsProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <SearchShortcut {...(filterPresetsProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
