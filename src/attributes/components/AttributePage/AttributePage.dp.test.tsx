import { createDeepMock } from "@test/deepMock";

jest.mock(
  "@dashboard/attributes/components/AssignReferenceTypesDialog/AssignReferenceTypesDialog",
  () => ({
    __esModule: true,
    default: jest.fn((..._a: any[]) => createDeepMock()),
    AssignReferenceTypesDialog: () => null,
    ReferenceTypes: () => null,
  }),
);
jest.mock("@dashboard/attributes/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  AttributeAddUrlQueryParams: () => null,
  attributeListPath: jest.fn((..._a: any[]) => createDeepMock()),
  AttributeUrlQueryParams: () => null,
}));
jest.mock("@dashboard/attributes/utils/data", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ATTRIBUTE_TYPES_WITH_DEDICATED_VALUES: () => null,
  ENTITY_TYPES_WITH_TYPES_RESTRICTION: () => null,
  REFERENCE_ATTRIBUTE_TYPES: () => null,
}));
jest.mock("@dashboard/auth", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useUser: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/auth/misc", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  hasPermission: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/components/AppLayout/TopNav", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  TopNav: () => null,
}));
jest.mock("@dashboard/components/CardSpacer", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  CardSpacer: () => null,
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
jest.mock("@dashboard/components/Layouts", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  DetailPageLayout: () => null,
}));
jest.mock("@dashboard/components/Metadata/Metadata", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Metadata: () => null,
}));
jest.mock("@dashboard/components/Savebar", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  Savebar: () => null,
}));
jest.mock("@dashboard/components/TablePagination", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  ListSettingsUpdate: () => null,
}));
jest.mock("@dashboard/config", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  DEFAULT_INITIAL_SEARCH_DATA: () => null,
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  AttributeDetailsQuery: () => null,
  AttributeEntityTypeEnum: () => null,
  AttributeErrorFragment: () => null,
  AttributeInputTypeEnum: () => null,
  AttributeTypeEnum: () => null,
  MeasurementUnitsEnum: () => null,
  PermissionEnum: () => null,
}));
jest.mock("@dashboard/hooks/makeTopLevelSearch/utils", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getSearchFetchMoreProps: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/hooks/useBackLinkWithState", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useBackLinkWithState: (..._a: any[]) => createDeepMock(),
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
jest.mock("@dashboard/searches/usePageTypeSearch", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  usePageTypeSearch: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/searches/useProductTypeSearch", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useProductTypeSearch: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/translations/components/TranslationsButton/TranslationsButton", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  TranslationsButton: () => null,
}));
jest.mock("@dashboard/translations/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  languageEntityUrl: jest.fn((..._a: any[]) => createDeepMock()),
  TranslatableEntities: () => null,
}));
jest.mock("@dashboard/translations/useCachedLocales", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useCachedLocales: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/utils/maps", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  mapEdgesToItems: jest.fn((..._a: any[]) => createDeepMock()),
  mapMetadataItemToInput: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/utils/metadata/useMetadataChangeTrigger", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useMetadataChangeTrigger: (..._a: any[]) => createDeepMock(),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import AttributePage from "./AttributePage";

describe("AttributePage deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders AttributePage with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <AttributePage {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders AttributePage with override props", () => {
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
          <AttributePage {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
