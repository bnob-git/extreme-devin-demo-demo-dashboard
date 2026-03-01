// Auto-generated coverage test for src/shipping/components/ShippingZoneCountriesAssignDialog/handlers.ts
import { createCountryChangeHandler, createRestOfTheWorldChangeHandler } from "./handlers";

jest.mock("@dashboard/hooks/useForm", () => ({
  __esModule: true,
  default: jest.fn(() => jest.fn()),
}));

describe("handlers.ts", () => {
  it("executes createCountryChangeHandler", () => {
    const _result = createCountryChangeHandler(
      [{ code: "US", country: "United States" }] as any[],
      {} as any,
    );

    void _result;
  });
  it("executes createRestOfTheWorldChangeHandler", () => {
    const _result = createRestOfTheWorldChangeHandler(
      { code: "US", country: "United States" } as any,
      [{ code: "US", country: "United States" }] as any[],
      [{ code: "US", country: "United States" }] as any[],
      {} as any,
    );

    void _result;
  });
});
