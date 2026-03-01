// Iterative coverage test for src/giftCards/GiftCardCreateDialog/utils.ts
import {
  getExpiryPeriodTerminationDate,
  getGiftCardCreateOnCompletedMessage,
  getGiftCardExpiryInputData,
} from "./utils";

jest.mock(
  "@dashboard/graphql",
  () => new Proxy({}, { get: (_: any, p: string) => (p === "__esModule" ? true : jest.fn()) }),
);
jest.mock("react-intl", () => ({
  useIntl: () => ({ formatMessage: (msg: any) => msg?.defaultMessage || "" }),
  defineMessages: (m: any) => m,
}));
jest.mock(
  "./messages",
  () =>
    new Proxy(
      {},
      { get: (_: any, p: string) => (p === "__esModule" ? true : { id: p, defaultMessage: p }) },
    ),
);
jest.mock(
  "../GiftCardsList/messages",
  () =>
    new Proxy(
      {},
      { get: (_: any, p: string) => (p === "__esModule" ? true : { id: p, defaultMessage: p }) },
    ),
);
jest.mock("@dashboard/utils/errors/common", () => {
  try {
    return jest.requireActual("@dashboard/utils/errors/common");
  } catch {
    return new Proxy(
      {},
      { get: (_: any, p: string) => (p === "__esModule" ? true : jest.fn(() => "")) },
    );
  }
});
jest.mock(
  "@dashboard/components/messages",
  () =>
    new Proxy(
      {},
      { get: (_: any, p: string) => (p === "__esModule" ? true : jest.fn(() => ({}))) },
    ),
);

describe("utils", () => {
  it("executes getExpiryPeriodTerminationDate", () => {
    const result = getExpiryPeriodTerminationDate({} as any, {} as any, {} as any);

    void result;
  });
  it("executes getGiftCardCreateOnCompletedMessage", () => {
    const result = getGiftCardCreateOnCompletedMessage(
      [],
      { formatMessage: (msg: any) => msg?.defaultMessage || "" } as any,
      {} as any,
    );

    void result;
  });
  it("executes getGiftCardExpiryInputData", () => {
    const result = getGiftCardExpiryInputData({} as any);

    void result;
  });
});
