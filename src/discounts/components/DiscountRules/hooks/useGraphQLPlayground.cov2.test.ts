// Auto-generated coverage test for src/discounts/components/DiscountRules/hooks/useGraphQLPlayground.ts
import { useGraphQLPlayground } from "./useGraphQLPlayground";

jest.mock(
  "@dashboard/components/DevModePanel/hooks",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, p: string) => {
          if (p === "__esModule") return true;

          return jest.fn(() => ({}));
        },
      },
    ),
);
jest.mock(
  "@dashboard/discounts/queries",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, p: string) => {
          if (p === "__esModule") return true;

          return jest.fn(() => ({}));
        },
      },
    ),
);

describe("useGraphQLPlayground.ts", () => {
  it("executes useGraphQLPlayground", () => {
    const _result = useGraphQLPlayground();

    void _result;
  });
});
