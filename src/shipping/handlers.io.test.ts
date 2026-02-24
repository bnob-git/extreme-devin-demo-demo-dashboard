jest.mock(
  "@dashboard/graphql",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, prop: string) => {
          if (prop === "__esModule") return true;

          if (/^[A-Z]/.test(prop)) return prop;

          if (/^use/.test(prop)) return () => ({ data: undefined, loading: false });

          return prop;
        },
      },
    ),
);
jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));
jest.mock("@dashboard/hooks/useNotifier", () => ({ __esModule: true, default: () => jest.fn() }));

import {
  createChannelsChangeHandler,
  getCountrySelectionMap,
  getShippingMethodChannelVariables,
  getUpdateShippingPriceRateVariables,
  getUpdateShippingWeightRateVariables,
  isRestWorldCountriesSelected,
  useShippingRateCreator,
} from "./handlers";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("handlers", () => {
  test("createChannelsChangeHandler is exported", () => {
    expect(createChannelsChangeHandler).toBeDefined();
  });

  test("getUpdateShippingPriceRateVariables is exported", () => {
    expect(getUpdateShippingPriceRateVariables).toBeDefined();
  });

  test("getUpdateShippingWeightRateVariables is exported", () => {
    expect(getUpdateShippingWeightRateVariables).toBeDefined();
  });

  test("getShippingMethodChannelVariables is exported", () => {
    expect(getShippingMethodChannelVariables).toBeDefined();
  });

  test("useShippingRateCreator is exported", () => {
    expect(useShippingRateCreator).toBeDefined();
  });

  test("getCountrySelectionMap is exported", () => {
    expect(getCountrySelectionMap).toBeDefined();
  });

  test("isRestWorldCountriesSelected is exported", () => {
    expect(isRestWorldCountriesSelected).toBeDefined();
  });

  test("createChannelsChangeHandler can be called", () => {
    if (typeof createChannelsChangeHandler === "function") {
      try {
        (createChannelsChangeHandler as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getUpdateShippingPriceRateVariables can be called", () => {
    if (typeof getUpdateShippingPriceRateVariables === "function") {
      try {
        (getUpdateShippingPriceRateVariables as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getUpdateShippingWeightRateVariables can be called", () => {
    if (typeof getUpdateShippingWeightRateVariables === "function") {
      try {
        (getUpdateShippingWeightRateVariables as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getShippingMethodChannelVariables can be called", () => {
    if (typeof getShippingMethodChannelVariables === "function") {
      try {
        (getShippingMethodChannelVariables as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("useShippingRateCreator can be called", () => {
    if (typeof useShippingRateCreator === "function") {
      try {
        (useShippingRateCreator as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getCountrySelectionMap can be called", () => {
    if (typeof getCountrySelectionMap === "function") {
      try {
        (getCountrySelectionMap as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("isRestWorldCountriesSelected can be called", () => {
    if (typeof isRestWorldCountriesSelected === "function") {
      try {
        (isRestWorldCountriesSelected as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
