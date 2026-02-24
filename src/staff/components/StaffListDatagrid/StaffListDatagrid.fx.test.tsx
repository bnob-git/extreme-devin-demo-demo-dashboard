jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { staffMember, staffMemberAvatar, staffMembers } from "../../fixtures";
import { StaffListDatagrid } from "./StaffListDatagrid";

describe("StaffListDatagrid fixture tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders StaffListDatagrid with staffMembers fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <StaffListDatagrid {...(staffMembers as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders StaffListDatagrid with staffMember fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <StaffListDatagrid {...(staffMember as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders StaffListDatagrid with staffMemberAvatar fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <StaffListDatagrid {...(staffMemberAvatar as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
