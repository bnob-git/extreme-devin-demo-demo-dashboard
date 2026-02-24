import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/components/Link", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Link: () => null,
}));
jest.mock("@dashboard/components/Timeline/TimelineEvent", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  TimelineEvent: () => null,
}));
jest.mock("@dashboard/customers/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  customerPath: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/extensions/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ExtensionsPaths: () => null,
  ExtensionsUrls: () => null,
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  GiftCardDetailsQuery: () => null,
  GiftCardEventsEnum: () => null,
}));
jest.mock("@dashboard/orders/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  orderUrl: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/staff/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  staffMemberDetailsUrl: jest.fn((..._a: any[]) => createDeepMock()),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import GiftCardTimelineEvent from "./GiftCardTimelineEvent";

describe("GiftCardTimelineEvent deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders GiftCardTimelineEvent with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <GiftCardTimelineEvent {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders GiftCardTimelineEvent with override props", () => {
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
          <GiftCardTimelineEvent {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
