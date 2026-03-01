// Iterative coverage test for src/products/views/ProductCreate/handlers.ts
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
jest.mock("@dashboard/utils/richText/misc", () => ({
  getParsedDataForJsonStringField: (data: any) => data || null,
  getStringOrPlaceholder: (s: any) => s || "",
}));
jest.mock("@dashboard/attributes/utils/handlers", () => {
  try {
    return jest.requireActual("@dashboard/attributes/utils/handlers");
  } catch {
    return new Proxy(
      {},
      { get: (_: any, p: string) => (p === "__esModule" ? true : jest.fn(() => "")) },
    );
  }
});
jest.mock("@dashboard/attributes/utils/data", () => {
  try {
    return jest.requireActual("@dashboard/attributes/utils/data");
  } catch {
    return new Proxy(
      {},
      { get: (_: any, p: string) => (p === "__esModule" ? true : jest.fn(() => "")) },
    );
  }
});
jest.mock(
  "@dashboard/products/components/ProductCreatePage/form",
  () =>
    new Proxy(
      {},
      { get: (_: any, p: string) => (p === "__esModule" ? true : jest.fn(() => ({}))) },
    ),
);
jest.mock("@dashboard/products/utils/handlers", () => {
  try {
    return jest.requireActual("@dashboard/products/utils/handlers");
  } catch {
    return new Proxy(
      {},
      { get: (_: any, p: string) => (p === "__esModule" ? true : jest.fn(() => "")) },
    );
  }
});
jest.mock("@dashboard/channels/utils", () => {
  try {
    return jest.requireActual("@dashboard/channels/utils");
  } catch {
    return new Proxy(
      {},
      { get: (_: any, p: string) => (p === "__esModule" ? true : jest.fn(() => "")) },
    );
  }
});

describe("handlers", () => {
  it("executes createHandler", () => {
    const result = createHandler({} as any, {} as any);

    void result;
  });
});
