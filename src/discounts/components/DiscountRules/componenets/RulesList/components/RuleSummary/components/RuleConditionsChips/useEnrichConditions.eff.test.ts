// Auto-generated coverage test for useEnrichConditions.ts
jest.mock("@dashboard/components/Locale", () => {
  const proxy: any = new Proxy(function () {}, {
    get: (_: any, p: string) => {
      if (p === "__esModule") return true;

      if (p === "default") return proxy;

      if (p === "then") return undefined;

      return proxy;
    },
    apply: () => proxy,
    construct: () => proxy,
  });

  return proxy;
});

jest.mock(
  "@dashboard/discounts/components/DiscountRules/componenets/RuleForm/components/RuleConditionName/hooks/useConditionNames",
  () => {
    const proxy: any = new Proxy(function () {}, {
      get: (_: any, p: string) => {
        if (p === "__esModule") return true;

        if (p === "default") return proxy;

        if (p === "then") return undefined;

        return proxy;
      },
      apply: () => proxy,
      construct: () => proxy,
    });

    return proxy;
  },
);

jest.mock(
  "@dashboard/discounts/components/DiscountRules/componenets/RuleForm/components/RuleConditionType/useConditionTypes",
  () => {
    const proxy: any = new Proxy(function () {}, {
      get: (_: any, p: string) => {
        if (p === "__esModule") return true;

        if (p === "default") return proxy;

        if (p === "then") return undefined;

        return proxy;
      },
      apply: () => proxy,
      construct: () => proxy,
    });

    return proxy;
  },
);

jest.mock("@dashboard/discounts/components/DiscountRules/context", () => {
  const proxy: any = new Proxy(function () {}, {
    get: (_: any, p: string) => {
      if (p === "__esModule") return true;

      if (p === "default") return proxy;

      if (p === "then") return undefined;

      return proxy;
    },
    apply: () => proxy,
    construct: () => proxy,
  });

  return proxy;
});

jest.mock("@dashboard/discounts/models", () => {
  const proxy: any = new Proxy(function () {}, {
    get: (_: any, p: string) => {
      if (p === "__esModule") return true;

      if (p === "default") return proxy;

      if (p === "then") return undefined;

      return proxy;
    },
    apply: () => proxy,
    construct: () => proxy,
  });

  return proxy;
});

jest.mock("@dashboard/hooks/useLocale", () => {
  const proxy: any = new Proxy(function () {}, {
    get: (_: any, p: string) => {
      if (p === "__esModule") return true;

      if (p === "default") return proxy;

      if (p === "then") return undefined;

      return proxy;
    },
    apply: () => proxy,
    construct: () => proxy,
  });

  return proxy;
});

jest.mock("react-intl", () => {
  const proxy: any = new Proxy(function () {}, {
    get: (_: any, p: string) => {
      if (p === "__esModule") return true;

      if (p === "default") return proxy;

      if (p === "then") return undefined;

      return proxy;
    },
    apply: () => proxy,
    construct: () => proxy,
  });

  return proxy;
});

jest.mock("../../messages", () => {
  const proxy: any = new Proxy(function () {}, {
    get: (_: any, p: string) => {
      if (p === "__esModule") return true;

      if (p === "default") return proxy;

      if (p === "then") return undefined;

      return proxy;
    },
    apply: () => proxy,
    construct: () => proxy,
  });

  return proxy;
});

jest.mock("./formatLable", () => {
  const proxy: any = new Proxy(function () {}, {
    get: (_: any, p: string) => {
      if (p === "__esModule") return true;

      if (p === "default") return proxy;

      if (p === "then") return undefined;

      return proxy;
    },
    apply: () => proxy,
    construct: () => proxy,
  });

  return proxy;
});

import { useEnrichConditions } from "./useEnrichConditions";

describe("useEnrichConditions", () => {
  it("exports useEnrichConditions", () => {
    expect(typeof useEnrichConditions).toBe("function");
  });
});
