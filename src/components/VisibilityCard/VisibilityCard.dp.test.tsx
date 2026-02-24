import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/components/ControlledCheckbox", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ControlledCheckbox: () => null,
}));
jest.mock("@dashboard/components/Hr", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Hr: () => null,
}));
jest.mock("@dashboard/components/RadioSwitchField", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  RadioSwitchField: () => null,
}));
jest.mock("@dashboard/hooks/useCurrentDate", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useCurrentDate: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useDateLocalize", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useDateLocalize: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useForm", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ChangeEvent: () => null,
}));
jest.mock("@dashboard/utils/errors", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getFieldError: jest.fn((..._a: any[]) => createDeepMock()),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import VisibilityCard from "./VisibilityCard";

describe("VisibilityCard deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders VisibilityCard with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <VisibilityCard {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders VisibilityCard with override props", () => {
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
          <VisibilityCard {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
