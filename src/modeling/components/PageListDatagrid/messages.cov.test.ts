import { columnsMessages, messages } from "./messages";

describe("modeling/components/PageListDatagrid/messages.ts", () => {
  it("should export columnsMessages", () => {
    expect(columnsMessages).toBeDefined();
  });

  it("should export messages", () => {
    expect(messages).toBeDefined();
  });
});
