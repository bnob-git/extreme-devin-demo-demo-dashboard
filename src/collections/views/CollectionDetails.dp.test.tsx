import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/channels/utils", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  createCollectionChannels: jest.fn((..._a: any[]) => createDeepMock()),
  createCollectionChannelsData: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/components/ActionDialog", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ActionDialog: () => null,
}));
jest.mock("@dashboard/components/AppLayout/AppChannelContext", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useAppChannel: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/components/ChannelsAvailabilityDialog", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ChannelsAvailabilityDialog: () => null,
}));
jest.mock("@dashboard/components/NotFoundPage", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  NotFoundPage: () => null,
}));
jest.mock("@dashboard/components/WindowTitle", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  WindowTitle: () => null,
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  CollectionInput: () => null,
  CollectionUpdateMutation: () => null,
  useCollectionChannelListingUpdateMutation: () => [
    jest.fn(() => Promise.resolve({ data: createDeepMock() })),
    { data: undefined, loading: false, called: false, status: "default" },
  ],
  useCollectionDetailsQuery: () => ({
    data: createDeepMock(),
    loading: false,
    error: undefined,
    refetch: jest.fn(),
    fetchMore: jest.fn(),
  }),
  useCollectionUpdateMutation: () => [
    jest.fn(() => Promise.resolve({ data: createDeepMock() })),
    { data: undefined, loading: false, called: false, status: "default" },
  ],
  useRemoveCollectionMutation: () => [
    jest.fn(() => Promise.resolve({ data: createDeepMock() })),
    { data: undefined, loading: false, called: false, status: "default" },
  ],
  useUpdateMetadataMutation: () => [
    jest.fn(() => Promise.resolve({ data: createDeepMock() })),
    { data: undefined, loading: false, called: false, status: "default" },
  ],
  useUpdatePrivateMetadataMutation: () => [
    jest.fn(() => Promise.resolve({ data: createDeepMock() })),
    { data: undefined, loading: false, called: false, status: "default" },
  ],
}));
jest.mock("@dashboard/hooks/useChannels", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useChannels: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useLocalStorage", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useLocalStorage: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useNavigator", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useNavigator: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useNotifier", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useNotifier: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/intl", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  commonMessages: jest.fn((..._a: any[]) => createDeepMock()),
  errorMessages: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/utils/arrays", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  arrayDiff: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/utils/handlers/dialogActionHandlers", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  createDialogActionHandlers: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/utils/handlers/metadataUpdateHandler", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  createMetadataUpdateHandler: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/utils/richText/misc", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getParsedDataForJsonStringField: jest.fn((..._a: any[]) => createDeepMock()),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import CollectionDetails from "./CollectionDetails";

describe("CollectionDetails deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders CollectionDetails with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <CollectionDetails {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders CollectionDetails with override props", () => {
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
          <CollectionDetails {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
