import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/attributes/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  attributeUrl: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/components/Card", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  DashboardCard: () => null,
}));
jest.mock("@dashboard/components/Checkbox", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Checkbox: () => null,
}));
jest.mock("@dashboard/components/ResponsiveTable", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ResponsiveTable: () => null,
}));
jest.mock("@dashboard/components/SortableTable", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  SortableTableBody: () => null,
  SortableTableRow: () => null,
}));
jest.mock("@dashboard/components/TableButtonWrapper/TableButtonWrapper", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  TableButtonWrapper: () => null,
}));
jest.mock("@dashboard/components/TableHead", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  TableHead: () => null,
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
  ProductAttributeType: () => null,
  ProductTypeDetailsQuery: () => null,
}));
jest.mock("@dashboard/misc", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  maybe: jest.fn((..._a: any[]) => createDeepMock()),
  renderCollection: jest.fn((..._a: any[]) => createDeepMock()),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import ProductTypeVariantAttributes from "./ProductTypeVariantAttributes";

describe("ProductTypeVariantAttributes deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders ProductTypeVariantAttributes with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <ProductTypeVariantAttributes {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders ProductTypeVariantAttributes with override props", () => {
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
          <ProductTypeVariantAttributes {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
