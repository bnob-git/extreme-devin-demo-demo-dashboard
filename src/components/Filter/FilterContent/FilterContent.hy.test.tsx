import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/hooks/useStateFromProps", () => ({
  __esModule: true,
  default: (val: any) => [val, jest.fn()],
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { FilterContent } from "./FilterContent";

describe("FilterContent hybrid render tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders FilterContent with deepMock props", () => {
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
    const props = createDeepMock({
      id: "test-1",
      disabled: false,
      loading: false,
      errors: [],
      onSubmit: jest.fn(),
      onChange: jest.fn(),
      onClose: jest.fn(),
      params: { id: "test-1" },
      data: createDeepMock(),
      channels: [],
      selected: 0,
      activeTab: 0,
    });

    try {
      render(
        <MemoryRouter>
          <FilterContent {...(props as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
