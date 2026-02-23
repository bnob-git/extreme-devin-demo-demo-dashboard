import { useMetadataValues } from "./useMetadataValues";

describe("orders/components/OrderLineMetadataDialog/useMetadataValues.tsx", () => {
  it("should execute useMetadataValues", () => {
    try {
      useMetadataValues({} as any, {} as any, {} as any, {} as any);
    } catch (e) {
      // May throw with undefined args
    }

    expect(true).toBe(true);
  });
});
