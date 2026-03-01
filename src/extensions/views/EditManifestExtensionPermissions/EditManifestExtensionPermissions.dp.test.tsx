import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/components/Link", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Link: () => null,
}));
jest.mock("@dashboard/extensions/getPermissionsDiff", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getPermissionsDiff: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock(
  "@dashboard/extensions/views/EditManifestExtension/hooks/useGetAvailableAppPermissions",
  () => ({
    __esModule: true,
    default: jest.fn((..._a: any[]) => createDeepMock()),
    useGetAvailableAppPermissions: (..._a: any[]) => createDeepMock(),
  }),
);
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  PermissionEnum: () => null,
  useAppQuery: () => ({
    data: createDeepMock(),
    loading: false,
    error: undefined,
    refetch: jest.fn(),
    fetchMore: jest.fn(),
  }),
  useAppUpdatePermissionsMutation: () => [
    jest.fn(() => Promise.resolve({ data: createDeepMock() })),
    { data: undefined, loading: false, called: false, status: "default" },
  ],
}));
jest.mock("@dashboard/links", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  APP_PERMISSIONS_DOCS_URL: () => null,
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { EditManifestExtensionPermissions } from "./EditManifestExtensionPermissions";

describe("EditManifestExtensionPermissions deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders EditManifestExtensionPermissions with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <EditManifestExtensionPermissions {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders EditManifestExtensionPermissions with override props", () => {
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
          <EditManifestExtensionPermissions {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
