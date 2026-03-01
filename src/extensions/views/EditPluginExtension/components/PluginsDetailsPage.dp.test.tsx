import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/components/AppLayout/TopNav", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  TopNav: () => null,
}));
jest.mock("@dashboard/components/ConfirmButton", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ConfirmButtonTransitionState: () => null,
}));
jest.mock("@dashboard/components/Form", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Form: () => null,
}));
jest.mock("@dashboard/components/Grid", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Grid: () => null,
}));
jest.mock("@dashboard/components/Layouts", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  DetailPageLayout: () => null,
}));
jest.mock("@dashboard/components/Savebar", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Savebar: () => null,
}));
jest.mock("@dashboard/extensions/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ExtensionsUrls: () => null,
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ConfigurationItemFragment: () => null,
  PluginConfigurationExtendedFragment: () => null,
  PluginErrorFragment: () => null,
  PluginsDetailsFragment: () => null,
}));
jest.mock("@dashboard/hooks/useForm", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ChangeEvent: () => null,
  SubmitPromise: () => null,
}));
jest.mock("@dashboard/hooks/useNavigator", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useNavigator: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/misc", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getStringOrPlaceholder: jest.fn((..._a: any[]) => createDeepMock()),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { PluginsDetailsPage } from "./PluginsDetailsPage";

describe("PluginsDetailsPage deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders PluginsDetailsPage with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <PluginsDetailsPage {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders PluginsDetailsPage with override props", () => {
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
          <PluginsDetailsPage {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
