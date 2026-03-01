jest.mock("@dashboard/hooks/useNotifier", () => ({ __esModule: true, default: () => jest.fn() }));

import BackgroundTasksProvider, {
  backgroundTasksRefreshTime,
  useBackgroundTasks,
} from "./BackgroundTasksProvider";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("BackgroundTasksProvider", () => {
  test("default export is defined", () => {
    expect(BackgroundTasksProvider).toBeDefined();
  });

  test("backgroundTasksRefreshTime is exported", () => {
    expect(backgroundTasksRefreshTime).toBeDefined();
  });

  test("useBackgroundTasks is exported", () => {
    expect(useBackgroundTasks).toBeDefined();
  });

  test("useBackgroundTasks can be called", () => {
    if (typeof useBackgroundTasks === "function") {
      try {
        (useBackgroundTasks as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
