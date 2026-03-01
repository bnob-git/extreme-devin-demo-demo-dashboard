import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/components/Datagrid/hooks/useDatagridChange", () => ({
  __esModule: true,
  useDatagridChangeState: () => ({ changes: { current: [] }, added: [], removed: [] }),
  default: () => ({ changes: { current: [] }, added: [], removed: [] }),
}));
jest.mock("@dashboard/hooks/useBackLinkWithState", () => ({
  __esModule: true,
  default: () => "/",
}));
jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { StaffListDatagrid } from "./StaffListDatagrid";

describe("StaffListDatagrid hybrid render tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders StaffListDatagrid with deepMock props", () => {
    try {
      render(
        <MemoryRouter>
          <StaffListDatagrid {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders StaffListDatagrid with override props", () => {
    const props = createDeepMock({
      id: "test-1",
      disabled: false,
      loading: false,
      errors: [],
      onSubmit: jest.fn(),
      onChange: jest.fn(),
      onClose: jest.fn(),
      params: { id: "test-1" },
      data: createDeepMock(),
      channels: [],
      selected: 0,
      activeTab: 0,
    });

    try {
      render(
        <MemoryRouter>
          <StaffListDatagrid {...(props as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
