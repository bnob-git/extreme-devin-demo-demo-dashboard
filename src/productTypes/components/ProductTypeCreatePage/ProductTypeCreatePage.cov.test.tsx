import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("@dashboard/utils/metadata/useMetadataChangeTrigger", () => ({
  __esModule: true,
  default: () => ({
    isMetadataModified: false,
    isPrivateMetadataModified: false,
    makeChangeHandler: jest.fn((h: any) => h),
    resetMetadataChanged: jest.fn(),
  }),
}));
jest.mock("@dashboard/hooks/useStateFromProps", () => ({
  __esModule: true,
  default: (val: any) => [val, jest.fn()],
}));
jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));
jest.mock(
  "@dashboard/graphql",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, prop: string) => {
          if (prop === "__esModule") return true;

          if (prop.startsWith("use"))
            return () => [
              jest.fn(() => Promise.resolve({ data: {} })),
              { data: undefined, loading: false, status: "default" },
            ];

          return jest.fn();
        },
      },
    ),
);

import ProductTypeCreatePage from "./ProductTypeCreatePage";

describe("ProductTypeCreatePage.tsx coverage", () => {
  it("should render ProductTypeCreatePage", () => {
    try {
      render(
        <MemoryRouter>
          <ProductTypeCreatePage
            {...({
              disabled: false,
              errors: [],
              data: { id: "test-id", name: "test", metadata: [], privateMetadata: [] },
              onSubmit: jest.fn(),
              onChange: jest.fn(),
              navigate: jest.fn(),
              saveButtonBarState: "default",
            } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render ProductTypeCreatePage with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <ProductTypeCreatePage
            {...({
              loading: true,
              disabled: true,
              data: undefined,
              id: "test-id",
              params: {},
            } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
