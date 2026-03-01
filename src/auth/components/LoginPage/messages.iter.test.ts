// Iterative coverage test for src/auth/components/LoginPage/messages.ts
import { getErrorMessage } from "./messages";

jest.mock("react-intl", () => ({
  useIntl: () => ({ formatMessage: (msg: any) => msg?.defaultMessage || "" }),
  defineMessages: (m: any) => m,
}));
jest.mock(
  "@dashboard/auth/types",
  () =>
    new Proxy(
      {},
      { get: (_: any, p: string) => (p === "__esModule" ? true : jest.fn(() => ({}))) },
    ),
);

describe("messages", () => {
  it("executes getErrorMessage", () => {
    const result = getErrorMessage(
      {} as any,
      { formatMessage: (msg: any) => msg?.defaultMessage || "" } as any,
    );

    void result;
  });
});
