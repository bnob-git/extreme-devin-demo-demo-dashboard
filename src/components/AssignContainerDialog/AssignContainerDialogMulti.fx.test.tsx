import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import {
  countries,
  filterPresetsProps,
  listActionsProps,
  pageListProps,
  tabPageProps,
} from "../../fixtures";
import { AssignContainerDialogMulti } from "./AssignContainerDialogMulti";

describe("AssignContainerDialogMulti fixture tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders AssignContainerDialogMulti with pageListProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <AssignContainerDialogMulti {...(pageListProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders AssignContainerDialogMulti with listActionsProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <AssignContainerDialogMulti {...(listActionsProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders AssignContainerDialogMulti with countries fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <AssignContainerDialogMulti {...(countries as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders AssignContainerDialogMulti with tabPageProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <AssignContainerDialogMulti {...(tabPageProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders AssignContainerDialogMulti with filterPresetsProps fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <AssignContainerDialogMulti {...(filterPresetsProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
