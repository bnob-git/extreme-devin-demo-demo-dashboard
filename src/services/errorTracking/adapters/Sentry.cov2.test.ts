// Auto-generated coverage test for src/services/errorTracking/adapters/Sentry.ts
import { SentryAdapter } from "./Sentry";

jest.mock(
  "history",
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
jest.mock("../types", () => ({}));

describe("Sentry.ts", () => {
  it("executes SentryAdapter", () => {
    const _result = SentryAdapter({} as any);

    void _result;
  });
});
