import { pageTypeDetailsFragment, pageTypeFragment } from "./pageTypes";

describe("fragments/pageTypes.ts", () => {
  it("should export pageTypeDetailsFragment", () => {
    expect(pageTypeDetailsFragment).toBeDefined();
  });

  it("should export pageTypeFragment", () => {
    expect(pageTypeFragment).toBeDefined();
  });
});
