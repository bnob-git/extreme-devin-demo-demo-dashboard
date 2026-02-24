jest.mock(
  "@dashboard/graphql",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, prop: string) => {
          if (prop === "__esModule") return true;

          if (/^[A-Z]/.test(prop)) return prop;

          if (/^use/.test(prop)) return () => ({ data: undefined, loading: false });

          return prop;
        },
      },
    ),
);

import {
  API_GUIDE_DOCS,
  API_REFERENCE_DOCS,
  CUSTOM_EXTENSIONS_DOCS_URL,
  DOCS_ULRS,
  EXTENDING_WITH_WEBHOOKS_DOCS_URL,
  EXTENSIONS_DOCS_URL,
  GIFT_CARD_PRODUCT_DOCS_URL,
  MANIFEST_FORMAT_DOCS_URL,
  MISSING_APPS_TYPEFORM_URL,
  ORDER_EVENTS_DOCS_URL,
  ORDER_MANAGEMENT_DOCS_URL,
  PLUGINS_DOCS_URL,
  PRODUCT_CONFIGURATION_DOCS_URL,
  TECHNICAL_HELP_CTA_URL,
  USER_PERMISSIONS_DOCS_URL,
} from "./links";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("links", () => {
  test("TECHNICAL_HELP_CTA_URL is exported", () => {
    expect(TECHNICAL_HELP_CTA_URL).toBeDefined();
  });

  test("DOCS_ULRS is exported", () => {
    expect(DOCS_ULRS).toBeDefined();
  });

  test("MISSING_APPS_TYPEFORM_URL is exported", () => {
    expect(MISSING_APPS_TYPEFORM_URL).toBeDefined();
  });

  test("PRODUCT_CONFIGURATION_DOCS_URL is exported", () => {
    expect(PRODUCT_CONFIGURATION_DOCS_URL).toBeDefined();
  });

  test("ORDER_MANAGEMENT_DOCS_URL is exported", () => {
    expect(ORDER_MANAGEMENT_DOCS_URL).toBeDefined();
  });

  test("API_REFERENCE_DOCS is exported", () => {
    expect(API_REFERENCE_DOCS).toBeDefined();
  });

  test("API_GUIDE_DOCS is exported", () => {
    expect(API_GUIDE_DOCS).toBeDefined();
  });

  test("EXTENDING_WITH_WEBHOOKS_DOCS_URL is exported", () => {
    expect(EXTENDING_WITH_WEBHOOKS_DOCS_URL).toBeDefined();
  });

  test("USER_PERMISSIONS_DOCS_URL is exported", () => {
    expect(USER_PERMISSIONS_DOCS_URL).toBeDefined();
  });

  test("ORDER_EVENTS_DOCS_URL is exported", () => {
    expect(ORDER_EVENTS_DOCS_URL).toBeDefined();
  });

  test("GIFT_CARD_PRODUCT_DOCS_URL is exported", () => {
    expect(GIFT_CARD_PRODUCT_DOCS_URL).toBeDefined();
  });

  test("EXTENSIONS_DOCS_URL is exported", () => {
    expect(EXTENSIONS_DOCS_URL).toBeDefined();
  });

  test("PLUGINS_DOCS_URL is exported", () => {
    expect(PLUGINS_DOCS_URL).toBeDefined();
  });

  test("CUSTOM_EXTENSIONS_DOCS_URL is exported", () => {
    expect(CUSTOM_EXTENSIONS_DOCS_URL).toBeDefined();
  });

  test("MANIFEST_FORMAT_DOCS_URL is exported", () => {
    expect(MANIFEST_FORMAT_DOCS_URL).toBeDefined();
  });
});
