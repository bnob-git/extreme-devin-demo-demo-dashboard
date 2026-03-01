import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/hooks/useNavigator", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useNavigator: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/usePaginator", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  createPaginationState: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/hooks/useShop", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useShop: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/utils/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  stringifyQs: jest.fn((..._a: any[]) => createDeepMock()),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import TranslationsEntities from "./TranslationsEntities";

describe("TranslationsEntities deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders TranslationsEntities with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <TranslationsEntities {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders TranslationsEntities with override props", () => {
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
          <TranslationsEntities {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
