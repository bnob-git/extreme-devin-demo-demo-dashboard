import {
  API_GUIDE_DOCS,
  API_REFERENCE_DOCS,
  DOCS_ULRS,
  EXTENDING_WITH_WEBHOOKS_DOCS_URL,
  MISSING_APPS_TYPEFORM_URL,
  ORDER_EVENTS_DOCS_URL,
  ORDER_MANAGEMENT_DOCS_URL,
  PRODUCT_CONFIGURATION_DOCS_URL,
  TECHNICAL_HELP_CTA_URL,
  USER_PERMISSIONS_DOCS_URL,
} from "./links";

describe("links coverage", () => {
  it("accesses TECHNICAL_HELP_CTA_URL", () => {
    expect(TECHNICAL_HELP_CTA_URL).toBeDefined();
  });

  it("accesses DOCS_ULRS", () => {
    expect(DOCS_ULRS).toBeDefined();
  });

  it("accesses MISSING_APPS_TYPEFORM_URL", () => {
    expect(MISSING_APPS_TYPEFORM_URL).toBeDefined();
  });

  it("accesses PRODUCT_CONFIGURATION_DOCS_URL", () => {
    expect(PRODUCT_CONFIGURATION_DOCS_URL).toBeDefined();
  });

  it("accesses ORDER_MANAGEMENT_DOCS_URL", () => {
    expect(ORDER_MANAGEMENT_DOCS_URL).toBeDefined();
  });

  it("accesses API_REFERENCE_DOCS", () => {
    expect(API_REFERENCE_DOCS).toBeDefined();
  });

  it("accesses API_GUIDE_DOCS", () => {
    expect(API_GUIDE_DOCS).toBeDefined();
  });

  it("accesses EXTENDING_WITH_WEBHOOKS_DOCS_URL", () => {
    expect(EXTENDING_WITH_WEBHOOKS_DOCS_URL).toBeDefined();
  });

  it("accesses USER_PERMISSIONS_DOCS_URL", () => {
    expect(USER_PERMISSIONS_DOCS_URL).toBeDefined();
  });

  it("accesses ORDER_EVENTS_DOCS_URL", () => {
    expect(ORDER_EVENTS_DOCS_URL).toBeDefined();
  });
});
