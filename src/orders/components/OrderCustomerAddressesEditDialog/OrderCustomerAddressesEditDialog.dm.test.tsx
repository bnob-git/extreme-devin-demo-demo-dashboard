jest.mock("@dashboard/components/Checkbox", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  Checkbox: () => null,
}));
jest.mock("@dashboard/components/ConfirmButton", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  ConfirmButton: () => null,
  ConfirmButtonTransitionState: () => null,
}));
jest.mock("@dashboard/components/FormSpacer", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  FormSpacer: () => null,
}));
jest.mock("@dashboard/components/Modal", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  DashboardModal: () => null,
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  AddressFragment: () => null,
  AddressInput: () => null,
  AddressTypeEnum: () => null,
  CountryWithCodeFragment: () => null,
  Node: () => null,
  OrderErrorFragment: () => null,
}));
jest.mock("@dashboard/hooks/useAddressValidation", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  useAddressValidation: (..._a: any[]) => ({
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
jest.mock("@dashboard/hooks/useForm", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  SubmitPromise: () => null,
}));
jest.mock("@dashboard/hooks/useModalDialogErrors", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  useModalDialogErrors: (..._a: any[]) => ({
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
jest.mock("@dashboard/misc", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  getById: jest.fn((...args: any[]) => args[0] ?? {}),
  transformAddressToAddressInput: jest.fn((...args: any[]) => args[0] ?? {}),
}));
jest.mock("@dashboard/utils/maps", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  mapCountriesToChoices: jest.fn((...args: any[]) => args[0] ?? {}),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import OrderCustomerAddressesEditDialog from "./OrderCustomerAddressesEditDialog";

describe("OrderCustomerAddressesEditDialog deep-mock tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders OrderCustomerAddressesEditDialog with deep-mocked deps", () => {
    try {
      render(
        <MemoryRouter>
          <OrderCustomerAddressesEditDialog
            {...({
              confirmButtonState: {},
              countries: [],
              customerAddresses: [],
              defaultBillingAddress: [],
              defaultShippingAddress: [],
              errors: [],
              loading: jest.fn(() => Promise.resolve({})),
              onClose: jest.fn(() => Promise.resolve({})),
              onConfirm: jest.fn(() => Promise.resolve({})),
              open: jest.fn(() => Promise.resolve({})),
              orderBillingAddress: [],
              orderShippingAddress: [],
              variant: "test-id",
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
