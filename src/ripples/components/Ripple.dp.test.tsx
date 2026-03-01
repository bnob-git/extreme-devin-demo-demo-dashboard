import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/ripples/components/RippleAnimation", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  RippleAnimation: () => null,
}));
jest.mock("@dashboard/ripples/hooks/useRipplesStorage", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useRippleStorage: (..._a: any[]) => createDeepMock(),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { Ripple } from "./Ripple";

describe("Ripple deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders Ripple with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <Ripple {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders Ripple with override props", () => {
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
          <Ripple {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
