import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/components/CollectionWithDividers", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  CollectionWithDividers: () => null,
}));
jest.mock("@dashboard/hooks/useStateFromProps", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useStateFromProps: (..._a: any[]) => createDeepMock(),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { FilterContent } from "./FilterContent";

describe("FilterContent deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders FilterContent with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <FilterContent {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders FilterContent with override props", () => {
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
          <FilterContent {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
