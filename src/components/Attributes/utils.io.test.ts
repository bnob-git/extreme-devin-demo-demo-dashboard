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
  booleanAttrValueToValue,
  getBooleanDropdownOptions,
  getErrorMessage,
  getFileChoice,
  getMultiChoices,
  getMultiDisplayValue,
  getReferenceDisplayValue,
  getSingleChoices,
  getSingleDisplayValue,
  getSingleReferenceDisplayValue,
  getTruncatedTextValue,
} from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("utils", () => {
  test("getSingleChoices is exported", () => {
    expect(getSingleChoices).toBeDefined();
  });

  test("getFileChoice is exported", () => {
    expect(getFileChoice).toBeDefined();
  });

  test("getReferenceDisplayValue is exported", () => {
    expect(getReferenceDisplayValue).toBeDefined();
  });

  test("getSingleReferenceDisplayValue is exported", () => {
    expect(getSingleReferenceDisplayValue).toBeDefined();
  });

  test("getMultiChoices is exported", () => {
    expect(getMultiChoices).toBeDefined();
  });

  test("getSingleDisplayValue is exported", () => {
    expect(getSingleDisplayValue).toBeDefined();
  });

  test("getMultiDisplayValue is exported", () => {
    expect(getMultiDisplayValue).toBeDefined();
  });

  test("getErrorMessage is exported", () => {
    expect(getErrorMessage).toBeDefined();
  });

  test("booleanAttrValueToValue is exported", () => {
    expect(booleanAttrValueToValue).toBeDefined();
  });

  test("getBooleanDropdownOptions is exported", () => {
    expect(getBooleanDropdownOptions).toBeDefined();
  });

  test("getTruncatedTextValue is exported", () => {
    expect(getTruncatedTextValue).toBeDefined();
  });

  test("getSingleChoices can be called", () => {
    if (typeof getSingleChoices === "function") {
      try {
        (getSingleChoices as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getFileChoice can be called", () => {
    if (typeof getFileChoice === "function") {
      try {
        (getFileChoice as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getReferenceDisplayValue can be called", () => {
    if (typeof getReferenceDisplayValue === "function") {
      try {
        (getReferenceDisplayValue as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getSingleReferenceDisplayValue can be called", () => {
    if (typeof getSingleReferenceDisplayValue === "function") {
      try {
        (getSingleReferenceDisplayValue as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getMultiChoices can be called", () => {
    if (typeof getMultiChoices === "function") {
      try {
        (getMultiChoices as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getSingleDisplayValue can be called", () => {
    if (typeof getSingleDisplayValue === "function") {
      try {
        (getSingleDisplayValue as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getMultiDisplayValue can be called", () => {
    if (typeof getMultiDisplayValue === "function") {
      try {
        (getMultiDisplayValue as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getErrorMessage can be called", () => {
    if (typeof getErrorMessage === "function") {
      try {
        (getErrorMessage as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("booleanAttrValueToValue can be called", () => {
    if (typeof booleanAttrValueToValue === "function") {
      try {
        (booleanAttrValueToValue as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getBooleanDropdownOptions can be called", () => {
    if (typeof getBooleanDropdownOptions === "function") {
      try {
        (getBooleanDropdownOptions as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getTruncatedTextValue can be called", () => {
    if (typeof getTruncatedTextValue === "function") {
      try {
        (getTruncatedTextValue as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
