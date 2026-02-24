// Auto-generated coverage test for src/components/ConditionalFilter/useTranslate.ts
import { useTranslate } from "./useTranslate";

jest.mock("react-intl", () => ({
  useIntl: () => ({ formatMessage: (msg: any) => msg?.defaultMessage || "" }),
  defineMessages: (m: any) => m,
  FormattedMessage: () => null,
}));
jest.mock("./intl", () => ({}));
jest.mock("./FilterElement", () => ({}));
jest.mock("./LeftOperandsProvider", () => ({}));

describe("useTranslate.ts", () => {
  it("executes useTranslate", () => {
    const _result = useTranslate();

    void _result;
  });
});
