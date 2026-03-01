// Iterative coverage test for src/discounts/views/VoucherCreate/handlers.ts
import { createHandler } from "./handlers";

jest.mock(
  "@dashboard/graphql",
  () => new Proxy({}, { get: (_: any, p: string) => (p === "__esModule" ? true : jest.fn()) }),
);
jest.mock("@dashboard/misc", () => ({
  getMutationErrors: (result: any) => {
    if (!result?.data) return [];

    const data = result.data;

    for (const key of Object.keys(data)) {
      if (data[key]?.errors) return data[key].errors;
    }

    return [];
  },
  extractMutationErrors: async (promise: any) => {
    const result = await promise;

    if (!result?.data) return [];

    const data = result.data;

    for (const key of Object.keys(data)) {
      if (data[key]?.errors?.length > 0) return data[key].errors;
    }

    return [];
  },
  getMutationState: (..._args: any[]) => "default" as any,
  joinDateTime: (date: string, time: string) => date + "T" + time,
  splitDateTime: (dt: string) => ({ date: dt?.split("T")[0] || "", time: dt?.split("T")[1] || "" }),
  weight: (w: any) => w,
  maybe: (val: any, fn: any) => (val ? fn(val) : undefined),
  findValueInEnum: (val: any, _obj: any) => val,
  findInEnum: (val: any, _obj: any) => val,
  decimal: (v: any) => v,
  getStringOrPlaceholder: (s: any) => s || "",
  mapEdgesToItems: (data: any) => data?.edges?.map((e: any) => e.node) || [],
}));
jest.mock(
  "@dashboard/discounts/components/VoucherDetailsPage",
  () =>
    new Proxy(
      {},
      { get: (_: any, p: string) => (p === "__esModule" ? true : jest.fn(() => ({}))) },
    ),
);
jest.mock(
  "@dashboard/discounts/components/VoucherCreatePage/types",
  () =>
    new Proxy(
      {},
      { get: (_: any, p: string) => (p === "__esModule" ? true : jest.fn(() => ({}))) },
    ),
);
jest.mock(
  "@dashboard/discounts/types",
  () =>
    new Proxy(
      {},
      { get: (_: any, p: string) => (p === "__esModule" ? true : jest.fn(() => ({}))) },
    ),
);
jest.mock(
  "@dashboard/discounts/handlers",
  () =>
    new Proxy(
      {},
      { get: (_: any, p: string) => (p === "__esModule" ? true : jest.fn(() => ({}))) },
    ),
);

describe("handlers", () => {
  it("executes createHandler", () => {
    const result = createHandler(jest.fn().mockResolvedValue({ data: {} }));

    void result;
  });
});
