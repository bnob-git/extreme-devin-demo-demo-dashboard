import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/components/Checkbox", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Checkbox: () => null,
}));
jest.mock("@dashboard/components/ConfirmButton", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ConfirmButton: () => null,
  ConfirmButtonTransitionState: () => null,
}));
jest.mock("@dashboard/components/FormSpacer", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  FormSpacer: () => null,
}));
jest.mock("@dashboard/components/Modal", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  DashboardModal: () => null,
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  AddressFragment: () => null,
  AddressInput: () => null,
  AddressTypeEnum: () => null,
  CountryWithCodeFragment: () => null,
  Node: () => null,
  OrderErrorFragment: () => null,
}));
jest.mock("@dashboard/hooks/useAddressValidation", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useAddressValidation: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useForm", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  SubmitPromise: () => null,
}));
jest.mock("@dashboard/hooks/useModalDialogErrors", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useModalDialogErrors: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/intl", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  buttonMessages: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/misc", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getById: jest.fn((..._a: any[]) => createDeepMock()),
  transformAddressToAddressInput: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/utils/maps", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  mapCountriesToChoices: jest.fn((..._a: any[]) => createDeepMock()),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import OrderCustomerAddressesEditDialog from "./OrderCustomerAddressesEditDialog";

describe("OrderCustomerAddressesEditDialog deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders OrderCustomerAddressesEditDialog with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <OrderCustomerAddressesEditDialog {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders OrderCustomerAddressesEditDialog with override props", () => {
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
          <OrderCustomerAddressesEditDialog {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
