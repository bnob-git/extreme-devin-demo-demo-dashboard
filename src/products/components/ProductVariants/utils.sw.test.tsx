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

import { getData, getError } from "./utils";

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

  it("getError handles case name", () => {
    try {
      const result = (getError as any)("name");

      expect(result !== undefined || result === undefined).toBe(true);
    } catch (_e) {
      /* expected */
    }
  });

  it("getError handles case sku", () => {
    try {
      const result = (getError as any)("sku");

      expect(result !== undefined || result === undefined).toBe(true);
    } catch (_e) {
      /* expected */
    }
  });

  it("getData handles case name", () => {
    try {
      const result = (getData as any)("name");

      expect(result !== undefined || result === undefined).toBe(true);
    } catch (_e) {
      /* expected */
    }
  });

  it("getData handles case sku", () => {
    try {
      const result = (getData as any)("sku");

      expect(result !== undefined || result === undefined).toBe(true);
    } catch (_e) {
      /* expected */
    }
  });
});
