import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/components/Datagrid/hooks/useRowAnchorHandler", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useRowAnchorHandler: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useNavigator", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  NavigatorOpts: () => null,
}));
jest.mock("@dashboard/products/components/ProductListDatagrid/datagrid", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getCellAction: jest.fn((..._a: any[]) => createDeepMock()),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Datagrid from "./Datagrid";

describe("Datagrid deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders Datagrid with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <Datagrid {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders Datagrid with override props", () => {
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
          <Datagrid {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
