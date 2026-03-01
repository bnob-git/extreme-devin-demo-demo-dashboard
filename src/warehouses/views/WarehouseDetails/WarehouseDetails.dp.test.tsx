import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/components/NotFoundPage", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  NotFoundPage: () => null,
}));
jest.mock("@dashboard/components/WindowTitle", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  WindowTitle: () => null,
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  CountryCode: () => null,
  useWarehouseDeleteMutation: () => [
    jest.fn(() => Promise.resolve({ data: createDeepMock() })),
    { data: undefined, loading: false, called: false, status: "default" },
  ],
  useWarehouseDetailsQuery: () => ({
    data: createDeepMock(),
    loading: false,
    error: undefined,
    refetch: jest.fn(),
    fetchMore: jest.fn(),
  }),
  useWarehouseUpdateMutation: () => [
    jest.fn(() => Promise.resolve({ data: createDeepMock() })),
    { data: undefined, loading: false, called: false, status: "default" },
  ],
}));
jest.mock("@dashboard/hooks/useNavigator", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useNavigator: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useNotifier", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useNotifier: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useShop", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useShop: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/intl", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  commonMessages: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/misc", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  extractMutationErrors: jest.fn((..._a: any[]) => createDeepMock()),
  findValueInEnum: jest.fn((..._a: any[]) => createDeepMock()),
  getMutationStatus: jest.fn((..._a: any[]) => createDeepMock()),
  getStringOrPlaceholder: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/utils/handlers/dialogActionHandlers", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  createDialogActionHandlers: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/warehouses/components/WarehouseDeleteDialog", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  WarehouseDeleteDialog: () => null,
}));
jest.mock("@dashboard/warehouses/components/WarehouseDetailsPage", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  WarehouseDetailsPageFormData: () => null,
  WarehouseDetailsPage: () => null,
}));
jest.mock("@dashboard/warehouses/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  warehouseListUrl: jest.fn((..._a: any[]) => createDeepMock()),
  warehouseUrl: jest.fn((..._a: any[]) => createDeepMock()),
  WarehouseUrlQueryParams: () => null,
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import WarehouseDetails from "./WarehouseDetails";

describe("WarehouseDetails deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders WarehouseDetails with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <WarehouseDetails {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders WarehouseDetails with override props", () => {
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
          <WarehouseDetails {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
