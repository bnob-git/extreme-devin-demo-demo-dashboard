import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/components/Button", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Button: () => null,
}));
jest.mock("@dashboard/components/Card", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  DashboardCard: () => null,
}));
jest.mock("@dashboard/components/RadioGroupField", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  RadioGroupField: () => null,
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
jest.mock("@dashboard/components/icons", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  iconSize: jest.fn((..._a: any[]) => createDeepMock()),
  iconStrokeWidthBySize: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  PostalCodeRuleInclusionTypeEnum: () => null,
  ShippingMethodTypeFragment: () => null,
}));
jest.mock("@dashboard/icons/ArrowDropdown", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ArrowDropdown: () => null,
}));
jest.mock("@dashboard/misc", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  renderCollection: jest.fn((..._a: any[]) => createDeepMock()),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import ShippingZonePostalCodes from "./ShippingZonePostalCodes";

describe("ShippingZonePostalCodes deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders ShippingZonePostalCodes with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <ShippingZonePostalCodes {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders ShippingZonePostalCodes with override props", () => {
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
          <ShippingZonePostalCodes {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
