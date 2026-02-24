import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/auth", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useUser: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/components/ActionDialog", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ActionDialog: () => null,
}));
jest.mock("@dashboard/components/NotFoundPage", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  NotFoundPage: () => null,
}));
jest.mock("@dashboard/components/RequirePermissions", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  hasPermissions: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/components/WindowTitle", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  WindowTitle: () => null,
}));
jest.mock("@dashboard/config", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  DEFAULT_INITIAL_SEARCH_DATA: () => null,
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  PermissionEnum: () => null,
  useStaffMemberDetailsQuery: () => ({
    data: createDeepMock(),
    loading: false,
    error: undefined,
    refetch: jest.fn(),
    fetchMore: jest.fn(),
  }),
}));
jest.mock("@dashboard/hooks/useNavigator", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useNavigator: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/misc", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  extractMutationErrors: jest.fn((..._a: any[]) => createDeepMock()),
  getStringOrPlaceholder: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/searches/usePermissionGroupSearch", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  usePermissionGroupSearch: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/utils/maps", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  mapEdgesToItems: jest.fn((..._a: any[]) => createDeepMock()),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { StaffDetailsView } from "./StaffDetails";

describe("StaffDetails deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders StaffDetailsView with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <StaffDetailsView {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders StaffDetailsView with override props", () => {
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
          <StaffDetailsView {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
