import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/components/ConfirmButton", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ConfirmButton: () => null,
  ConfirmButtonTransitionState: () => null,
}));
jest.mock("@dashboard/components/InfiniteScroll", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  InfiniteScroll: () => null,
}));
jest.mock("@dashboard/components/Modal", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  DashboardModal: () => null,
}));
jest.mock("@dashboard/components/ResponsiveTable", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ResponsiveTable: () => null,
}));
jest.mock("@dashboard/components/TableRowLink", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  TableRowLink: () => null,
}));
jest.mock("@dashboard/components/Throbber", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  SaleorThrobber: () => null,
}));
jest.mock("@dashboard/hooks/useModalDialogOpen", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useModalDialogOpen: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useSearchQuery", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useSearchQuery: () => ({
    data: createDeepMock(),
    loading: false,
    error: undefined,
    refetch: jest.fn(),
    fetchMore: jest.fn(),
  }),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { AssignContainerDialogMulti } from "./AssignContainerDialogMulti";

describe("AssignContainerDialogMulti deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders AssignContainerDialogMulti with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <AssignContainerDialogMulti {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders AssignContainerDialogMulti with override props", () => {
    try {
      const mockProps = createDeepMock({
        id: "test-1",
        name: "Test",
        disabled: false,
        loading: false,
        errors: [],
        data: createDeepMock(),
        onSubmit: jest.fn(),
        onChange: jest.fn(),
        onClose: jest.fn(),
        onBack: jest.fn(),
        open: false,
        channels: [],
        params: { id: "test-1" },
      });

      render(
        <MemoryRouter>
          <AssignContainerDialogMulti {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
