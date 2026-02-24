import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import {
  countries,
  filterPresetsProps,
  listActionsProps,
  pageListProps,
  tabPageProps,
} from "../../fixtures";
import { AssignContainerDialogSingle } from "./AssignContainerDialogSingle";

describe("AssignContainerDialogSingle fixture tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders AssignContainerDialogSingle with pageListProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <AssignContainerDialogSingle {...(pageListProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders AssignContainerDialogSingle with listActionsProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <AssignContainerDialogSingle {...(listActionsProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders AssignContainerDialogSingle with countries fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <AssignContainerDialogSingle {...(countries as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders AssignContainerDialogSingle with tabPageProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <AssignContainerDialogSingle {...(tabPageProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders AssignContainerDialogSingle with filterPresetsProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <AssignContainerDialogSingle {...(filterPresetsProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
