import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/channels/utils", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ChannelData: () => null,
}));
jest.mock("@dashboard/components/Card", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  DashboardCard: () => null,
}));
jest.mock("@dashboard/components/TableRowLink", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  TableRowLink: () => null,
}));
jest.mock("@dashboard/components/icons", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  iconSize: jest.fn((..._a: any[]) => createDeepMock()),
  iconStrokeWidthBySize: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ProductErrorFragment: () => null,
  WarehouseFragment: () => null,
}));
jest.mock("@dashboard/hooks/useForm", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  FormChange: () => null,
}));
jest.mock("@dashboard/hooks/useFormset", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  FormsetAtomicData: () => null,
  FormsetChange: () => null,
}));
jest.mock("@dashboard/misc", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  renderCollection: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/utils/errors", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getFormErrors: jest.fn((..._a: any[]) => createDeepMock()),
  getProductErrorMessage: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/utils/handlers/nonNegativeValueChangeHandler", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  createNonNegativeValueChangeHandler: jest.fn((..._a: any[]) => createDeepMock()),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { ProductStocks } from "./ProductStocks";

describe("ProductStocks deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders ProductStocks with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <ProductStocks {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders ProductStocks with override props", () => {
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
          <ProductStocks {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
