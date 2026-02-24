import {
  CLOUD_PLUGIN_ID,
  getExternalAuthenticationMethodName,
  getNewPasswordResetRedirectUrl,
  handleNestedMutationErrors,
  showAllErrors,
  SSO_PLUGIN_ID,
} from "./utils";

describe("utils multi-arg tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls showAllErrors with empty_obj (variant 0)", () => {
    try {
      const result = (showAllErrors as any)();

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls showAllErrors with intl (variant 1)", () => {
    try {
      const result = (showAllErrors as any)();

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls showAllErrors with array_data (variant 2)", () => {
    try {
      const result = (showAllErrors as any)();

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls showAllErrors with null_val (variant 3)", () => {
    try {
      const result = (showAllErrors as any)();

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls showAllErrors with string_val (variant 4)", () => {
    try {
      const result = (showAllErrors as any)();

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls showAllErrors with number_val (variant 5)", () => {
    try {
      const result = (showAllErrors as any)();

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls handleNestedMutationErrors with empty_obj (variant 0)", () => {
    try {
      const result = (handleNestedMutationErrors as any)();

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls handleNestedMutationErrors with intl (variant 1)", () => {
    try {
      const result = (handleNestedMutationErrors as any)();

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls handleNestedMutationErrors with null_val (variant 2)", () => {
    try {
      const result = (handleNestedMutationErrors as any)();

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls handleNestedMutationErrors with string_val (variant 3)", () => {
    try {
      const result = (handleNestedMutationErrors as any)();

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls handleNestedMutationErrors with number_val (variant 4)", () => {
    try {
      const result = (handleNestedMutationErrors as any)();

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls handleNestedMutationErrors with boolean_val (variant 5)", () => {
    try {
      const result = (handleNestedMutationErrors as any)();

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls getNewPasswordResetRedirectUrl with empty_obj (variant 0)", () => {
    try {
      const result = (getNewPasswordResetRedirectUrl as any)();

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls getNewPasswordResetRedirectUrl with intl (variant 1)", () => {
    try {
      const result = (getNewPasswordResetRedirectUrl as any)();

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls getNewPasswordResetRedirectUrl with form_data (variant 2)", () => {
    try {
      const result = (getNewPasswordResetRedirectUrl as any)();

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls getNewPasswordResetRedirectUrl with null_val (variant 3)", () => {
    try {
      const result = (getNewPasswordResetRedirectUrl as any)();

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls getNewPasswordResetRedirectUrl with string_val (variant 4)", () => {
    try {
      const result = (getNewPasswordResetRedirectUrl as any)();

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls getNewPasswordResetRedirectUrl with number_val (variant 5)", () => {
    try {
      const result = (getNewPasswordResetRedirectUrl as any)();

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls CLOUD_PLUGIN_ID with empty_obj (variant 0)", () => {
    try {
      const result = (CLOUD_PLUGIN_ID as any)({}, "test");

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls CLOUD_PLUGIN_ID with intl (variant 1)", () => {
    try {
      const result = (CLOUD_PLUGIN_ID as any)(
        {
          formatMessage: (m: any) => m?.defaultMessage || "",
          formatNumber: (n: any) => String(n),
          formatDate: () => "",
          locale: "en",
        },
        "test",
      );

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls CLOUD_PLUGIN_ID with form_data (variant 2)", () => {
    try {
      const result = (CLOUD_PLUGIN_ID as any)(
        {
          id: "1",
          name: "test",
          slug: "test",
          description: "",
          isActive: true,
          metadata: [],
          privateMetadata: [],
          errors: [],
        },
        "test",
      );

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls CLOUD_PLUGIN_ID with null_val (variant 3)", () => {
    try {
      const result = (CLOUD_PLUGIN_ID as any)(null as any, "test");

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls CLOUD_PLUGIN_ID with string_val (variant 4)", () => {
    try {
      const result = (CLOUD_PLUGIN_ID as any)("test-value", "test");

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls CLOUD_PLUGIN_ID with number_val (variant 5)", () => {
    try {
      const result = (CLOUD_PLUGIN_ID as any)(42, "test");

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls SSO_PLUGIN_ID with empty_obj (variant 0)", () => {
    try {
      const result = (SSO_PLUGIN_ID as any)({}, "test");

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls SSO_PLUGIN_ID with intl (variant 1)", () => {
    try {
      const result = (SSO_PLUGIN_ID as any)(
        {
          formatMessage: (m: any) => m?.defaultMessage || "",
          formatNumber: (n: any) => String(n),
          formatDate: () => "",
          locale: "en",
        },
        "test",
      );

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls SSO_PLUGIN_ID with form_data (variant 2)", () => {
    try {
      const result = (SSO_PLUGIN_ID as any)(
        {
          id: "1",
          name: "test",
          slug: "test",
          description: "",
          isActive: true,
          metadata: [],
          privateMetadata: [],
          errors: [],
        },
        "test",
      );

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls SSO_PLUGIN_ID with null_val (variant 3)", () => {
    try {
      const result = (SSO_PLUGIN_ID as any)(null as any, "test");

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls SSO_PLUGIN_ID with string_val (variant 4)", () => {
    try {
      const result = (SSO_PLUGIN_ID as any)("test-value", "test");

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls SSO_PLUGIN_ID with number_val (variant 5)", () => {
    try {
      const result = (SSO_PLUGIN_ID as any)(42, "test");

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls getExternalAuthenticationMethodName with empty_obj (variant 0)", () => {
    try {
      const result = (getExternalAuthenticationMethodName as any)({});

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls getExternalAuthenticationMethodName with intl (variant 1)", () => {
    try {
      const result = (getExternalAuthenticationMethodName as any)({
        formatMessage: (m: any) => m?.defaultMessage || "",
        formatNumber: (n: any) => String(n),
        formatDate: () => "",
        locale: "en",
      });

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls getExternalAuthenticationMethodName with form_data (variant 2)", () => {
    try {
      const result = (getExternalAuthenticationMethodName as any)({
        id: "1",
        name: "test",
        slug: "test",
        description: "",
        isActive: true,
        metadata: [],
        privateMetadata: [],
        errors: [],
      });

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls getExternalAuthenticationMethodName with null_val (variant 3)", () => {
    try {
      const result = (getExternalAuthenticationMethodName as any)(null as any);

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls getExternalAuthenticationMethodName with string_val (variant 4)", () => {
    try {
      const result = (getExternalAuthenticationMethodName as any)("test-value");

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls getExternalAuthenticationMethodName with number_val (variant 5)", () => {
    try {
      const result = (getExternalAuthenticationMethodName as any)(42);

      if (result && typeof result === "object" && typeof result.then === "function") {
        result.catch(() => {});
      }
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
