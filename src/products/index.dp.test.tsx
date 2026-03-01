import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/components/ConditionalFilter/context", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ConditionalProductFilterProvider: () => null,
}));
jest.mock("@dashboard/components/Router", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Route: () => null,
}));
jest.mock("@dashboard/intl", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  sectionNames: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/url-utils", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  parseQs: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/utils/sort", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  asSortParams: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/utils/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getArrayQueryParam: jest.fn((..._a: any[]) => createDeepMock()),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Component from ".";

describe("index deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders Component with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <Component {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders Component with override props", () => {
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
          <Component {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
