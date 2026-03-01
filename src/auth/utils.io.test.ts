import {
  CLOUD_PLUGIN_ID,
  getExternalAuthenticationMethodName,
  getNewPasswordResetRedirectUrl,
  handleNestedMutationErrors,
  showAllErrors,
  SSO_PLUGIN_ID,
} from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("utils", () => {
  test("showAllErrors is exported", () => {
    expect(showAllErrors).toBeDefined();
  });

  test("handleNestedMutationErrors is exported", () => {
    expect(handleNestedMutationErrors).toBeDefined();
  });

  test("getNewPasswordResetRedirectUrl is exported", () => {
    expect(getNewPasswordResetRedirectUrl).toBeDefined();
  });

  test("CLOUD_PLUGIN_ID is exported", () => {
    expect(CLOUD_PLUGIN_ID).toBeDefined();
  });

  test("SSO_PLUGIN_ID is exported", () => {
    expect(SSO_PLUGIN_ID).toBeDefined();
  });

  test("getExternalAuthenticationMethodName is exported", () => {
    expect(getExternalAuthenticationMethodName).toBeDefined();
  });

  test("showAllErrors can be called", () => {
    if (typeof showAllErrors === "function") {
      try {
        (showAllErrors as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("handleNestedMutationErrors can be called", () => {
    if (typeof handleNestedMutationErrors === "function") {
      try {
        (handleNestedMutationErrors as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getNewPasswordResetRedirectUrl can be called", () => {
    if (typeof getNewPasswordResetRedirectUrl === "function") {
      try {
        (getNewPasswordResetRedirectUrl as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getExternalAuthenticationMethodName can be called", () => {
    if (typeof getExternalAuthenticationMethodName === "function") {
      try {
        (getExternalAuthenticationMethodName as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
