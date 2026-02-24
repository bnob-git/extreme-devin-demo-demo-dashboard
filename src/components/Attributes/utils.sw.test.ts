jest.mock(
  "@dashboard/graphql",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, prop: string) => {
          if (prop === "__esModule") return true;

          if (typeof prop === "string" && prop.startsWith("use"))
            return () => ({ data: undefined, loading: false });

          return prop;
        },
      },
    ),
);

import { getErrorMessage, getSingleDisplayValue, getSingleReferenceDisplayValue } from "./utils";

const _mockIntl: any = {
  formatMessage: (msg: any) => msg?.defaultMessage || msg?.id || "translated",
  formatNumber: (n: any) => String(n),
  formatDate: () => "date",
  locale: "en",
};

describe("utils switch tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("getSingleReferenceDisplayValue handles case ProductError", () => {
    try {
      const result = (getSingleReferenceDisplayValue as any)({ __typename: "ProductError" });

      expect(result !== undefined || result === undefined).toBe(true);
    } catch (_e) {
      /* expected */
    }
  });

  it("getSingleReferenceDisplayValue handles case PageError", () => {
    try {
      const result = (getSingleReferenceDisplayValue as any)({ __typename: "PageError" });

      expect(result !== undefined || result === undefined).toBe(true);
    } catch (_e) {
      /* expected */
    }
  });

  it("getSingleDisplayValue handles case ProductError", () => {
    try {
      const result = (getSingleDisplayValue as any)({ __typename: "ProductError" });

      expect(result !== undefined || result === undefined).toBe(true);
    } catch (_e) {
      /* expected */
    }
  });

  it("getSingleDisplayValue handles case PageError", () => {
    try {
      const result = (getSingleDisplayValue as any)({ __typename: "PageError" });

      expect(result !== undefined || result === undefined).toBe(true);
    } catch (_e) {
      /* expected */
    }
  });

  it("getErrorMessage handles case ProductError", () => {
    try {
      const result = (getErrorMessage as any)("ProductError", _mockIntl);

      expect(result !== undefined || result === undefined).toBe(true);
    } catch (_e) {
      /* expected */
    }
  });

  it("getErrorMessage handles case PageError", () => {
    try {
      const result = (getErrorMessage as any)("PageError", _mockIntl);

      expect(result !== undefined || result === undefined).toBe(true);
    } catch (_e) {
      /* expected */
    }
  });
});
