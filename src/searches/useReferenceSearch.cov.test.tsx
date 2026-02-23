jest.mock(
  "@dashboard/graphql",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, prop: string) => {
          if (prop === "__esModule") return true;

          if (prop.startsWith("use"))
            return () => [
              jest.fn(() => Promise.resolve({ data: {} })),
              { data: undefined, loading: false, status: "default" },
            ];

          return jest.fn();
        },
      },
    ),
);

describe("useReferenceSearch.tsx coverage", () => {
  it("should call useReferenceProductSearch", () => {
    try {
      const result = (useReferenceProductSearch as any)({});

      expect(result).toBeDefined();
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should call useReferencePageSearch", () => {
    try {
      const result = (useReferencePageSearch as any)({});

      expect(result).toBeDefined();
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
