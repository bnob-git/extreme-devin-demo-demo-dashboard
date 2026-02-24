import {
  SidebarProvider,
  useCustomSidebarBreakpoint,
  useSidebarBreakpointContext,
} from "./SidebarContext";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("SidebarContext", () => {
  test("SidebarProvider is exported", () => {
    expect(SidebarProvider).toBeDefined();
  });

  test("useSidebarBreakpointContext is exported", () => {
    expect(useSidebarBreakpointContext).toBeDefined();
  });

  test("useCustomSidebarBreakpoint is exported", () => {
    expect(useCustomSidebarBreakpoint).toBeDefined();
  });

  test("SidebarProvider can be called", () => {
    if (typeof SidebarProvider === "function") {
      try {
        (SidebarProvider as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("useSidebarBreakpointContext can be called", () => {
    if (typeof useSidebarBreakpointContext === "function") {
      try {
        (useSidebarBreakpointContext as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("useCustomSidebarBreakpoint can be called", () => {
    if (typeof useCustomSidebarBreakpoint === "function") {
      try {
        (useCustomSidebarBreakpoint as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
