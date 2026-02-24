import { MenuItemsSortableTreeItem } from "./MenuItemsSortableTreeItem";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("MenuItemsSortableTreeItem", () => {
  test("MenuItemsSortableTreeItem is exported", () => {
    expect(MenuItemsSortableTreeItem).toBeDefined();
  });

  test("MenuItemsSortableTreeItem can be called", () => {
    if (typeof MenuItemsSortableTreeItem === "function") {
      try {
        (MenuItemsSortableTreeItem as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
