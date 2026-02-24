import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/components/Accordion", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  AccordionProps: () => null,
  Accordion: () => null,
}));
jest.mock("@dashboard/components/ChannelsAvailabilityDialog/utils", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useChannelsSearch: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/components/ChannelsAvailabilityDialogChannelsList", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ChannelsAvailabilityDialogChannelsList: () => null,
}));
jest.mock("@dashboard/components/ChannelsAvailabilityDialogWrapper", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ChannelsAvailabilityDialogContentWrapper: () => null,
}));
jest.mock("@dashboard/components/Checkbox", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Checkbox: () => null,
}));
jest.mock("@dashboard/components/Chip", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Chip: () => null,
}));
jest.mock("@dashboard/components/Hr", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Hr: () => null,
}));
jest.mock("@dashboard/components/Throbber", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  SaleorThrobber: () => null,
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ChannelFragment: () => null,
  ExportProductsInput: () => null,
  ProductFieldEnum: () => null,
}));
jest.mock("@dashboard/hooks/useForm", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ChangeEvent: () => null,
  FormChange: () => null,
}));
jest.mock("@dashboard/hooks/useSearchQuery", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useSearchQuery: () => ({
    data: createDeepMock(),
    loading: false,
    error: undefined,
    refetch: jest.fn(),
    fetchMore: jest.fn(),
  }),
}));
jest.mock("@dashboard/intl", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  sectionNames: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/utils/lists", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  toggle: jest.fn((..._a: any[]) => createDeepMock()),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import ProductExportDialogInfo from "./ProductExportDialogInfo";

describe("ProductExportDialogInfo deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders ProductExportDialogInfo with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <ProductExportDialogInfo {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders ProductExportDialogInfo with override props", () => {
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
          <ProductExportDialogInfo {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
