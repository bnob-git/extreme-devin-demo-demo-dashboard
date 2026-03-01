import { dropAnimationConfig, measuring } from "./config";

describe("components/SortableTree/config.ts", () => {
  it("should export dropAnimationConfig", () => {
    expect(dropAnimationConfig).toBeDefined();
  });

  it("should export measuring", () => {
    expect(measuring).toBeDefined();
  });
});
