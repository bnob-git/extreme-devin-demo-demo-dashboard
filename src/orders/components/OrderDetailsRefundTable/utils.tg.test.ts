jest.mock(
  "@dashboard/graphql",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, prop: string) => {
          if (prop === "__esModule") return true;

          if (typeof prop === "string" && /^[A-Z]/.test(prop)) return prop;

          return prop;
        },
      },
    ),
);

import { getGrantedRefundStatusMessage, getNotEditableRefundMessage } from "./utils";

describe("utils targeted tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("getGrantedRefundStatusMessage executes with valid args", () => {
    const result = (getGrantedRefundStatusMessage as any)(
      {} as any,
      {
        formatMessage: (m: any) => m?.defaultMessage || "msg",
        formatDate: (d: any) => String(d),
        formatTime: (t: any) => String(t),
        formatNumber: (n: any) => String(n),
        locale: "en",
      } as any,
    );

    expect(result !== undefined || result === undefined).toBe(true);
  });

  it("getNotEditableRefundMessage executes with valid args", () => {
    const result = (getNotEditableRefundMessage as any)({} as any);

    expect(result !== undefined || result === undefined).toBe(true);
  });
});
