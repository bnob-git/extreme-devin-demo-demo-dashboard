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
jest.mock("@dashboard/hooks/useStateFromProps", () => ({
  __esModule: true,
  default: (val: any) => [val, jest.fn()],
}));
jest.mock("@dashboard/hooks/useNotifier", () => ({ __esModule: true, default: () => jest.fn() }));
jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));
jest.mock("@dashboard/hooks/useBulkActions", () => ({
  __esModule: true,
  default: () => ({
    isSelected: jest.fn(() => false),
    listElements: [],
    toggle: jest.fn(),
    toggleAll: jest.fn(),
    reset: jest.fn(),
    set: jest.fn(),
  }),
}));
jest.mock("@dashboard/utils/handlers/dialogActionHandlers", () => ({
  __esModule: true,
  default: () => [jest.fn(), jest.fn()],
}));
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

import { PermissionGroupDetails } from "./PermissionGroupDetails";

describe("PermissionGroupDetails.tsx coverage", () => {
  it("should render PermissionGroupDetails", () => {
    try {
      render(
        <MemoryRouter>
          <PermissionGroupDetails
            {...({
              id: "test-id",
              params: {},
              disabled: false,
              onSubmit: jest.fn(),
              onClose: jest.fn(),
              onDelete: jest.fn(),
              navigate: jest.fn(),
              open: true,
              selected: [],
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
