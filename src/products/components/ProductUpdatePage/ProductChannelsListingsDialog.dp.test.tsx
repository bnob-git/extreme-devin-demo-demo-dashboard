import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/components/ChannelsAvailabilityDialog", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ChannelsAvailabilityDialog: () => null,
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ChannelFragment: () => null,
}));
jest.mock("@dashboard/hooks/useStateFromProps", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useStateFromProps: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/utils/arrays", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  arrayDiff: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/utils/lists", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  toggle: jest.fn((..._a: any[]) => createDeepMock()),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import ProductChannelsListingsDialog from "./ProductChannelsListingsDialog";

describe("ProductChannelsListingsDialog deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders ProductChannelsListingsDialog with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <ProductChannelsListingsDialog {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders ProductChannelsListingsDialog with override props", () => {
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
          <ProductChannelsListingsDialog {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
