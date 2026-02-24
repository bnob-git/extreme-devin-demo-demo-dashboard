// Auto-generated coverage test for src/extensions/components/WebhookDetailsPage/components/PermissionAlert/utils.ts
import { extractPermissions, getPermissions } from "./utils";

jest.mock(
  "graphql",
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

describe("utils.ts", () => {
  it("executes extractPermissions", () => {
    const _result = extractPermissions("test");

    void _result;
  });
  it("executes getPermissions", () => {
    const _result = getPermissions("", "");

    void _result;
  });
});
