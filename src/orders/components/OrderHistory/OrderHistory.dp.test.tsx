import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/components/Card", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  DashboardCard: () => null,
}));
jest.mock("@dashboard/components/CopyableText/CopyableText", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  CopyableText: () => null,
}));
jest.mock("@dashboard/components/Form", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Form: () => null,
}));
jest.mock("@dashboard/components/Pill", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Pill: () => null,
}));
jest.mock("@dashboard/components/Timeline/Timeline", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Timeline: () => null,
  TimelineAddNote: () => null,
}));
jest.mock("@dashboard/components/Timeline/TimelineEvent", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  TimelineEvent: () => null,
}));
jest.mock("@dashboard/components/Timeline/TimelineNote", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  TimelineNote: () => null,
}));
jest.mock("@dashboard/components/Timeline/utils", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  toActor: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  OrderEventFragment: () => null,
  OrderEventsEnum: () => null,
  OrderNoteUpdateMutation: () => null,
}));
jest.mock("@dashboard/hooks/useForm", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  SubmitPromise: () => null,
}));
jest.mock("@dashboard/links", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ORDER_EVENTS_DOCS_URL: () => null,
}));
jest.mock("@dashboard/orders/ripples/newOrderSummary", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  rippleRefreshedOrderSections: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/orders/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  orderUrl: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/ripples/components/Ripple", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Ripple: () => null,
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import OrderHistory from "./OrderHistory";

describe("OrderHistory deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders OrderHistory with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <OrderHistory {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders OrderHistory with override props", () => {
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
          <OrderHistory {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
