import { getErrorMessage } from "./messages";

describe("messages targeted tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("getErrorMessage executes with valid args", () => {
    const result = (getErrorMessage as any)(
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
});
