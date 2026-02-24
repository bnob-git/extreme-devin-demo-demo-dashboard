// Auto-generated coverage test for src/components/ConditionalFilter/API/providers/VoucherFilterAPIProvider.ts
import { useVoucherAPIProvider } from "./VoucherFilterAPIProvider";

jest.mock("@dashboard/graphql", () => ({
  PostalCodeRuleInclusionTypeEnum: { INCLUDE: "INCLUDE", EXCLUDE: "EXCLUDE" },
  ShippingMethodTypeEnum: { PRICE: "PRICE", WEIGHT: "WEIGHT" },
}));
jest.mock("react-intl", () => ({
  useIntl: () => ({ formatMessage: (msg: any) => msg?.defaultMessage || "" }),
  defineMessages: (m: any) => m,
  FormattedMessage: () => null,
}));
jest.mock("../FilterAPIProvider", () => ({}));
jest.mock("../Handler", () => ({}));
jest.mock("../utils", () => ({}));
jest.mock(
  "@apollo/client",
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
jest.mock("../../FilterElement", () => ({}));

describe("VoucherFilterAPIProvider.ts", () => {
  it("executes useVoucherAPIProvider", () => {
    const _result = useVoucherAPIProvider();

    void _result;
  });
});
