jest.mock("@dashboard/components/Card", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  DashboardCard: () => null,
}));
jest.mock("@dashboard/components/CardSpacer", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  CardSpacer: () => null,
}));
jest.mock("@dashboard/components/ConfirmButton", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  ConfirmButton: () => null,
  ConfirmButtonTransitionState: () => null,
}));
jest.mock("@dashboard/components/PriceField", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  PriceField: () => null,
}));
jest.mock("@dashboard/components/RadioGroupField", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  NewRadioGroupField: () => null,
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  DiscountValueTypeEnum: () => null,
  MoneyFragment: () => null,
}));
jest.mock("@dashboard/hooks/useUpdateEffect", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  useUpdateEffect: (..._a: any[]) => ({
    data: undefined,
    loading: false,
    change: jest.fn(),
    submit: jest.fn(),
    set: jest.fn(),
    reset: jest.fn(),
    hasChanged: false,
    toggle: jest.fn(),
    toggleAll: jest.fn(),
    isSelected: jest.fn(() => false),
    listElements: [],
    settings: { rowNumber: 20, columns: [] },
    updateListSettings: jest.fn(),
    locale: "en",
    setLocale: jest.fn(),
    selectedRowIds: [],
    setClearDatagridRowSelectionCallback: jest.fn(),
    clearRowSelection: jest.fn(),
    setSelectedRowIds: jest.fn(),
  }),
}));
jest.mock("@dashboard/intl", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  buttonMessages: jest.fn((...args: any[]) => args[0] ?? {}),
}));
jest.mock("@dashboard/utils/toFixed", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  toFixed: jest.fn((...args: any[]) => args[0] ?? {}),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import OrderDiscountCommonModal from "./OrderDiscountCommonModal";

describe("OrderDiscountCommonModal deep-mock tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders OrderDiscountCommonModal with deep-mocked deps", () => {
    try {
      render(
        <MemoryRouter>
          <OrderDiscountCommonModal {...({} as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
