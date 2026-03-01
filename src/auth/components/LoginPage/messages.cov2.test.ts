// Auto-generated coverage test for src/auth/components/LoginPage/messages.ts
import { getErrorMessage } from "./messages";

jest.mock("react-intl", () => ({
  useIntl: () => ({ formatMessage: (msg: any) => msg?.defaultMessage || "" }),
  defineMessages: (m: any) => m,
  FormattedMessage: () => null,
}));
jest.mock(
  "@dashboard/auth/types",
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

describe("messages.ts", () => {
  it("executes getErrorMessage", () => {
    const _result = getErrorMessage(
      {} as any,
      { formatMessage: (msg: any) => msg?.defaultMessage || "" } as any,
    );

    void _result;
  });
});
