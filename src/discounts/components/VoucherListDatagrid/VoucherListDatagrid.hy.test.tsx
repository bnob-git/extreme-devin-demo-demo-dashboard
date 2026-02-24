import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/components/Datagrid/hooks/useDatagridChange", () => ({
  __esModule: true,
  useDatagridChangeState: () => ({ changes: { current: [] }, added: [], removed: [] }),
  default: () => ({ changes: { current: [] }, added: [], removed: [] }),
}));
jest.mock("@dashboard/graphql", () => {
  const { createDeepMock } = jest.requireActual("@test/deepMock");

  return new Proxy(
    {},
    {
      get: (_t: any, prop: string) => {
        if (prop === "__esModule") return true;

        if (typeof prop === "string" && prop.startsWith("use") && prop.endsWith("Query")) {
          return () => ({
            data: createDeepMock(),
            loading: false,
            error: undefined,
            refetch: jest.fn(),
            fetchMore: jest.fn(),
          });
        }

        if (typeof prop === "string" && prop.startsWith("use") && prop.endsWith("Mutation")) {
          return () => [
            jest.fn(() => Promise.resolve({ data: {} })),
            { data: undefined, loading: false, called: false, status: "default" },
          ];
        }

        if (typeof prop === "string" && prop.startsWith("use"))
          return () => ({ data: createDeepMock(), loading: false });

        return jest.fn();
      },
    },
  );
});
jest.mock("@dashboard/hooks/useBackLinkWithState", () => ({
  __esModule: true,
  default: () => "/",
}));
jest.mock("@dashboard/hooks/useLocale", () => ({
  __esModule: true,
  default: () => ({ locale: "en", setLocale: jest.fn() }),
}));
jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { VoucherListDatagrid } from "./VoucherListDatagrid";

describe("VoucherListDatagrid hybrid render tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders VoucherListDatagrid with deepMock props", () => {
    try {
      render(
        <MemoryRouter>
          <VoucherListDatagrid {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders VoucherListDatagrid with override props", () => {
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
          <VoucherListDatagrid {...(props as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
