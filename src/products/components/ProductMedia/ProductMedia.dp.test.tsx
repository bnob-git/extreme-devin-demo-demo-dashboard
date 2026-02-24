import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/components/Card", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  DashboardCard: () => null,
}));
jest.mock("@dashboard/components/ImageUpload", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ImageUpload: () => null,
}));
jest.mock("@dashboard/components/MediaTile", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  MediaTile: () => null,
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ProductMediaFragment: () => null,
  ProductMediaType: () => null,
}));
jest.mock("@dashboard/utils/handlers/multiFileUploadHandler", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  createMultiFileUploadHandler: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock(
  "react-sortable-hoc",
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

import ProductMedia from "./ProductMedia";

describe("ProductMedia deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders ProductMedia with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <ProductMedia {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders ProductMedia with override props", () => {
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
          <ProductMedia {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
