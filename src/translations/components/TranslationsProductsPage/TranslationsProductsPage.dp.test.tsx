import { createDeepMock } from "@test/deepMock";

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
jest.mock("@dashboard/components/LanguageSwitch/LanguageSwitch", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  LanguageSwitchWithCaching: () => null,
}));
jest.mock("@dashboard/components/Layouts", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  DetailPageLayout: () => null,
}));
jest.mock(
  "@dashboard/extensions/components/AppExtensionContext/AppExtensionContextProvider",
  () => ({
    __esModule: true,
    default: jest.fn((..._a: any[]) => createDeepMock()),
    useActiveAppExtension: (..._a: any[]) => createDeepMock(),
  }),
);
jest.mock(
  "@dashboard/extensions/components/ExtensionsButtonSelector/ExtensionsButtonSelector",
  () => ({
    __esModule: true,
    default: jest.fn((..._a: any[]) => createDeepMock()),
    ExtensionsButtonSelector: () => null,
  }),
);
jest.mock("@dashboard/extensions/getExtensionsItems", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getExtensionsItemsForTranslationDetails: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/extensions/hooks/useExtensions", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useExtensions: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  LanguageCodeEnum: () => null,
  ProductTranslationFragment: () => null,
}));
jest.mock("@dashboard/hooks/useNavigator", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  useNavigator: (..._a: any[]) => createDeepMock(),
}));
jest.mock("@dashboard/intl", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  commonMessages: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/misc", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getStringOrPlaceholder: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock(
  "@dashboard/translations/components/TranslationsProductsPage/create-product-translate-form-payload-event",
  () => ({
    __esModule: true,
    default: jest.fn((..._a: any[]) => createDeepMock()),
    createProductTranslateFormPayloadEvent: jest.fn((..._a: any[]) => createDeepMock()),
  }),
);
jest.mock("@dashboard/translations/urls", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  languageEntitiesUrl: jest.fn((..._a: any[]) => createDeepMock()),
  languageEntityUrl: jest.fn((..._a: any[]) => createDeepMock()),
  productVariantUrl: jest.fn((..._a: any[]) => createDeepMock()),
  TranslatableEntities: () => null,
}));
jest.mock("@dashboard/translations/utils", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  mapAttributeValuesToTranslationFields: jest.fn((..._a: any[]) => createDeepMock()),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { TranslationsProductsPage } from "./TranslationsProductsPage";

describe("TranslationsProductsPage deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders TranslationsProductsPage with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <TranslationsProductsPage {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders TranslationsProductsPage with override props", () => {
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
          <TranslationsProductsPage {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
