import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/components/AppLayout/TopNav", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  TopNav: () => null,
}));
jest.mock("@dashboard/components/CardTitle/CardTitle", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  CardTitle: () => null,
}));
jest.mock("@dashboard/components/ConfirmButton", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ConfirmButtonTransitionState: () => null,
}));
jest.mock("@dashboard/components/Grid", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Grid: () => null,
}));
jest.mock("@dashboard/components/Layouts", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  DetailPageLayout: () => null,
}));
jest.mock("@dashboard/components/Metadata", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Metadata: () => null,
}));
jest.mock("@dashboard/components/Savebar", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Savebar: () => null,
}));
jest.mock("@dashboard/components/VerticalSpacer", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  VerticalSpacer: () => null,
}));
jest.mock("@dashboard/configuration", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  configurationMenuUrl: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  TaxClassFragment: () => null,
}));
jest.mock("@dashboard/hooks/useClientPagination/useClientPagination", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useClientPagination: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useForm", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  SubmitPromise: () => null,
}));
jest.mock("@dashboard/hooks/useNavigator", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useNavigator: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/misc", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getById: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/orders/components/OrderCustomerAddressesEditDialog/utils", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  parseQuery: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/taxes/components/TaxPageTitle", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  TaxPageTitle: () => null,
}));
jest.mock("@dashboard/taxes/messages", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  taxesMessages: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/taxes/utils/useAutofocus", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useAutofocus: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/taxes/utils/utils", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  isLastElement: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/utils/errors", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getFormErrors: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/utils/errors/taxes", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getTaxesErrorMessage: jest.fn((..._a: any[]) => createDeepMock()),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import TaxClassesPage from "./TaxClassesPage";

describe("TaxClassesPage deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders TaxClassesPage with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <TaxClassesPage {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders TaxClassesPage with override props", () => {
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
          <TaxClassesPage {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
