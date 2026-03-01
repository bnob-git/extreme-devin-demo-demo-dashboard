// Iterative coverage test for src/permissionGroups/sort.ts
import { sortMembers } from "./sort";

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
  "./urls",
  () =>
    new Proxy(
      {},
      {
        get: (_: any, p: string) =>
          p === "__esModule" ? true : (...args: any[]) => "/mock-url/" + args.join("/"),
      },
    ),
);

describe("sort", () => {
  it("executes sortMembers", async () => {
    const outer = sortMembers({ sort: "name", asc: true } as any, {} as any);

    expect(outer).toBeDefined();

    if (typeof outer === "function") {
      const inner = await outer({} as any, {} as any);

      void inner;
    }
  });
});
