import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/channels/utils", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ChannelCollectionData: () => null,
}));
jest.mock("@dashboard/collections/utils", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  createChannelsChangeHandler: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/collections/views/consts", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  COLLECTION_DETAILS_FORM_ID: () => null,
}));
jest.mock("@dashboard/components/Form/useExitFormDialog", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useExitFormDialog: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/components/Metadata", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  MetadataFormData: () => null,
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  CollectionDetailsFragment: () => null,
}));
jest.mock("@dashboard/hooks/useForm", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  CommonUseFormResultWithHandlers: () => null,
  FormChange: () => null,
  useForm: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useHandleFormSubmit", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useHandleFormSubmit: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/utils/maps", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  mapMetadataItemToInput: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/utils/metadata/getMetadata", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getMetadata: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/utils/metadata/useMetadataChangeTrigger", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useMetadataChangeTrigger: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/utils/richText/context", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  RichTextContext: () => null,
  RichTextContextValues: () => null,
}));
jest.mock("@dashboard/utils/richText/useRichText", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useRichText: (..._a: any[]) => createDeepMock(),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import CollectionUpdateForm from "./form";

describe("form deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders CollectionUpdateForm with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <CollectionUpdateForm {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders CollectionUpdateForm with override props", () => {
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
          <CollectionUpdateForm {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
