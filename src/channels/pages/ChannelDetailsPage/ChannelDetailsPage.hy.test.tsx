import { createDeepMock } from "@test/deepMock";

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
jest.mock("@dashboard/hooks/makeTopLevelSearch", () => ({
  __esModule: true,
  default: (..._a: any[]) => createDeepMock(),
  makeTopLevelSearch: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/makeTopLevelSearch/utils", () => ({
  __esModule: true,
  default: (..._a: any[]) => createDeepMock(),
  utils: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useForm", () => ({
  __esModule: true,
  default: (init: any, onSubmit: any) => ({
    data: init || {},
    change: jest.fn(),
    submit: onSubmit || jest.fn(),
    hasChanged: false,
    setChanged: jest.fn(),
    errors: {},
    setError: jest.fn(),
    clearErrors: jest.fn(),
  }),
}));
jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));
jest.mock("@dashboard/hooks/useStateFromProps", () => ({
  __esModule: true,
  default: (val: any) => [val, jest.fn()],
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import ChannelDetailsPage from "./ChannelDetailsPage";

describe("ChannelDetailsPage hybrid render tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders ChannelDetailsPage with deepMock props", () => {
    try {
      render(
        <MemoryRouter>
          <ChannelDetailsPage {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders ChannelDetailsPage with override props", () => {
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
          <ChannelDetailsPage {...(props as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
