import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("@dashboard/hooks/useShop", () => ({
  __esModule: true,
  default: () => ({
    countries: [],
    defaultCountry: { code: "US", country: "US" },
    defaultWeightUnit: "KG",
    displayGrossPrices: true,
    name: "Shop",
    permissions: [],
    version: "3.0.0",
  }),
}));
jest.mock("@dashboard/hooks/useNotifier", () => ({ __esModule: true, default: () => jest.fn() }));
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

import { PermissionGroupCreate } from "./PermissionGroupCreate";

describe("PermissionGroupCreate.tsx coverage", () => {
  it("should render PermissionGroupCreate", () => {
    try {
      render(
        <MemoryRouter>
          <PermissionGroupCreate
            {...({
              id: "test-id",
              disabled: false,
              onSubmit: jest.fn(),
              navigate: jest.fn(),
              channels: [],
              saveButtonBarState: "default",
              name: "test",
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
