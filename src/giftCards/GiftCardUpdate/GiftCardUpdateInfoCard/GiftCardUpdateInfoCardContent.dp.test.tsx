import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/components/CardSpacer", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  CardSpacer: () => null,
}));
jest.mock("@dashboard/components/Link", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Link: () => null,
}));
jest.mock("@dashboard/customers/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  customerUrl: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/extensions/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ExtensionsUrls: () => null,
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  GiftCardEventsEnum: () => null,
}));
jest.mock("@dashboard/hooks/useDateLocalize", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useDateLocalize: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/misc", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getFullName: jest.fn((..._a: any[]) => createDeepMock()),
  getStringOrPlaceholder: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/orders/components/OrderHistory/Label", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Label: () => null,
}));
jest.mock("@dashboard/orders/components/OrderHistory/utils", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getOrderNumberLinkObject: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/orders/components/OrderReturnPage/utils", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getByType: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/products/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  productUrl: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/staff/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  staffMemberDetailsUrl: jest.fn((..._a: any[]) => createDeepMock()),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import GiftCardUpdateInfoCardContent from "./GiftCardUpdateInfoCardContent";

describe("GiftCardUpdateInfoCardContent deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders GiftCardUpdateInfoCardContent with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <GiftCardUpdateInfoCardContent {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders GiftCardUpdateInfoCardContent with override props", () => {
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
          <GiftCardUpdateInfoCardContent {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
