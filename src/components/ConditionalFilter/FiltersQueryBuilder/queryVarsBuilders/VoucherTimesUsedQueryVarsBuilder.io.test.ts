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

import { VoucherTimesUsedQueryVarsBuilder } from "./VoucherTimesUsedQueryVarsBuilder";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("VoucherTimesUsedQueryVarsBuilder", () => {
  test("VoucherTimesUsedQueryVarsBuilder is exported", () => {
    expect(VoucherTimesUsedQueryVarsBuilder).toBeDefined();
  });
});
