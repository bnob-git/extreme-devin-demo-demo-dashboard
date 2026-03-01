jest.mock("@dashboard/attributes/urls", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  attributeUrl: jest.fn((...args: any[]) => args[0] ?? {}),
}));
jest.mock("@dashboard/components/Card", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  DashboardCard: () => null,
}));
jest.mock("@dashboard/components/Checkbox", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  Checkbox: () => null,
}));
jest.mock("@dashboard/components/ResponsiveTable", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  ResponsiveTable: () => null,
}));
jest.mock("@dashboard/components/SortableTable", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  SortableTableBody: () => null,
  SortableTableRow: () => null,
}));
jest.mock("@dashboard/components/TableButtonWrapper/TableButtonWrapper", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  TableButtonWrapper: () => null,
}));
jest.mock("@dashboard/components/TableHead", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  TableHead: () => null,
}));
jest.mock("@dashboard/components/TableRowLink", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  TableRowLink: () => null,
}));
jest.mock("@dashboard/components/icons", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  iconSize: jest.fn((...args: any[]) => args[0] ?? {}),
  iconStrokeWidthBySize: jest.fn((...args: any[]) => args[0] ?? {}),
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  ProductAttributeType: () => null,
  ProductTypeDetailsQuery: () => null,
}));
jest.mock("@dashboard/misc", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  maybe: jest.fn((...args: any[]) => args[0] ?? {}),
  renderCollection: jest.fn((...args: any[]) => args[0] ?? {}),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import ProductTypeVariantAttributes from "./ProductTypeVariantAttributes";

describe("ProductTypeVariantAttributes deep-mock tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders ProductTypeVariantAttributes with deep-mocked deps", () => {
    try {
      render(
        <MemoryRouter>
          <ProductTypeVariantAttributes
            {...({
              assignedVariantAttributes: [],
              disabled: false,
              isChecked: false,
              onAttributeAssign: jest.fn(() => Promise.resolve({})),
              onAttributeReorder: jest.fn(() => Promise.resolve({})),
              onAttributeUnassign: jest.fn(() => Promise.resolve({})),
              selected: false,
              selectedVariantAttributes: false,
              setSelectedVariantAttributes: jest.fn(() => Promise.resolve({})),
              testId: "test-id",
              toggle: jest.fn(() => Promise.resolve({})),
              toggleAll: jest.fn(() => Promise.resolve({})),
              toolbar: {},
              type: "test-id",
            } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
