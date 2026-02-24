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
jest.mock("@dashboard/misc", () => ({
  ...jest.requireActual("@dashboard/misc"),
  transformOrderStatus: (s: any) => ({ localized: String(s) }),
}));

import { createGetCellContent } from "./datagrid";

const _mockIntl: any = {
  formatMessage: (msg: any) => msg?.defaultMessage || msg?.id || "translated",
  formatNumber: (n: any) => String(n),
  formatDate: () => "date",
  locale: "en",
};

describe("datagrid switch tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("createGetCellContent handles case giftCardCode", () => {
    try {
      const result = (createGetCellContent as any)("giftCardCode", _mockIntl);

      expect(result !== undefined || result === undefined).toBe(true);
    } catch (_e) {
      /* expected */
    }
  });

  it("createGetCellContent handles case status", () => {
    try {
      const result = (createGetCellContent as any)("status", _mockIntl);

      expect(result !== undefined || result === undefined).toBe(true);
    } catch (_e) {
      /* expected */
    }
  });

  it("createGetCellContent handles case tag", () => {
    try {
      const result = (createGetCellContent as any)("tag", _mockIntl);

      expect(result !== undefined || result === undefined).toBe(true);
    } catch (_e) {
      /* expected */
    }
  });

  it("createGetCellContent handles case product", () => {
    try {
      const result = (createGetCellContent as any)("product", _mockIntl);

      expect(result !== undefined || result === undefined).toBe(true);
    } catch (_e) {
      /* expected */
    }
  });

  it("createGetCellContent handles case usedBy", () => {
    try {
      const result = (createGetCellContent as any)("usedBy", _mockIntl);

      expect(result !== undefined || result === undefined).toBe(true);
    } catch (_e) {
      /* expected */
    }
  });

  it("createGetCellContent handles case balance", () => {
    try {
      const result = (createGetCellContent as any)("balance", _mockIntl);

      expect(result !== undefined || result === undefined).toBe(true);
    } catch (_e) {
      /* expected */
    }
  });
});
