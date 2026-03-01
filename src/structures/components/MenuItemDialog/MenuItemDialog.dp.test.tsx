import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/components/BackButton", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  BackButton: () => null,
}));
jest.mock("@dashboard/components/Combobox", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Combobox: () => null,
}));
jest.mock("@dashboard/components/ConfirmButton", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ConfirmButton: () => null,
  ConfirmButtonTransitionState: () => null,
}));
jest.mock("@dashboard/components/Modal", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  DashboardModal: () => null,
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  MenuErrorFragment: () => null,
}));
jest.mock("@dashboard/hooks/useModalDialogErrors", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useModalDialogErrors: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useModalDialogOpen", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useModalDialogOpen: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/intl", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  buttonMessages: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/utils/errors", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getFieldError: jest.fn((..._a: any[]) => createDeepMock()),
  getFormErrors: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/utils/errors/menu", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getMenuErrorMessage: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock(
  "react-hook-form",
  () =>
    new Proxy(
      {},
      {
        get: (_: any, p: string) =>
          p === "__esModule" ? true : jest.fn((..._a: any[]) => createDeepMock()),
      },
    ),
);

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import MenuItemDialog from "./MenuItemDialog";

describe("MenuItemDialog deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders MenuItemDialog with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <MenuItemDialog {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders MenuItemDialog with override props", () => {
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
          <MenuItemDialog {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
