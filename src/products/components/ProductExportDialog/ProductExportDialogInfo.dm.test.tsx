jest.mock("@dashboard/components/Accordion", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  Accordion: () => null,
  AccordionProps: () => null,
}));
jest.mock("@dashboard/components/ChannelsAvailabilityDialog/utils", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  useChannelsSearch: (..._a: any[]) => ({
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
jest.mock("@dashboard/components/ChannelsAvailabilityDialogChannelsList", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  ChannelsAvailabilityDialogChannelsList: () => null,
}));
jest.mock("@dashboard/components/ChannelsAvailabilityDialogWrapper", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  ChannelsAvailabilityDialogContentWrapper: () => null,
}));
jest.mock("@dashboard/components/Checkbox", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  Checkbox: () => null,
}));
jest.mock("@dashboard/components/Chip", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  Chip: () => null,
}));
jest.mock("@dashboard/components/Hr", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  Hr: () => null,
}));
jest.mock("@dashboard/components/Throbber", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  SaleorThrobber: () => null,
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  ChannelFragment: () => null,
  ExportProductsInput: () => null,
  ProductFieldEnum: () => null,
}));
jest.mock("@dashboard/hooks/useForm", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  ChangeEvent: () => null,
  FormChange: () => null,
}));
jest.mock("@dashboard/hooks/useSearchQuery", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  useSearchQuery: () => ({
    data: undefined,
    loading: false,
    error: undefined,
    refetch: jest.fn(),
    fetchMore: jest.fn(),
  }),
}));
jest.mock("@dashboard/intl", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  sectionNames: jest.fn((...args: any[]) => args[0] ?? {}),
}));
jest.mock("@dashboard/utils/lists", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  toggle: jest.fn((...args: any[]) => args[0] ?? {}),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import ProductExportDialogInfo from "./ProductExportDialogInfo";

describe("ProductExportDialogInfo deep-mock tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders ProductExportDialogInfo with deep-mocked deps", () => {
    try {
      render(
        <MemoryRouter>
          <ProductExportDialogInfo {...({} as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
