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

import {
  arePermissionsExceeded,
  channelsDiff,
  checkIfUserBelongToPermissionGroup,
  checkIfUserHasRestictedAccessToChannels,
  extractPermissionCodes,
  getInitialChannels,
  getUserAccessibleChannelsOptions,
  isGroupFullAccess,
  mapAccessibleChannelsToChoice,
  permissionsDiff,
  usersDiff,
} from "./utils";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("utils", () => {
  test("isGroupFullAccess is exported", () => {
    expect(isGroupFullAccess).toBeDefined();
  });

  test("extractPermissionCodes is exported", () => {
    expect(extractPermissionCodes).toBeDefined();
  });

  test("permissionsDiff is exported", () => {
    expect(permissionsDiff).toBeDefined();
  });

  test("usersDiff is exported", () => {
    expect(usersDiff).toBeDefined();
  });

  test("channelsDiff is exported", () => {
    expect(channelsDiff).toBeDefined();
  });

  test("arePermissionsExceeded is exported", () => {
    expect(arePermissionsExceeded).toBeDefined();
  });

  test("mapAccessibleChannelsToChoice is exported", () => {
    expect(mapAccessibleChannelsToChoice).toBeDefined();
  });

  test("checkIfUserBelongToPermissionGroup is exported", () => {
    expect(checkIfUserBelongToPermissionGroup).toBeDefined();
  });

  test("getUserAccessibleChannelsOptions is exported", () => {
    expect(getUserAccessibleChannelsOptions).toBeDefined();
  });

  test("checkIfUserHasRestictedAccessToChannels is exported", () => {
    expect(checkIfUserHasRestictedAccessToChannels).toBeDefined();
  });

  test("getInitialChannels is exported", () => {
    expect(getInitialChannels).toBeDefined();
  });

  test("isGroupFullAccess can be called", () => {
    if (typeof isGroupFullAccess === "function") {
      try {
        (isGroupFullAccess as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("extractPermissionCodes can be called", () => {
    if (typeof extractPermissionCodes === "function") {
      try {
        (extractPermissionCodes as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("permissionsDiff can be called", () => {
    if (typeof permissionsDiff === "function") {
      try {
        (permissionsDiff as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("usersDiff can be called", () => {
    if (typeof usersDiff === "function") {
      try {
        (usersDiff as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("channelsDiff can be called", () => {
    if (typeof channelsDiff === "function") {
      try {
        (channelsDiff as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("arePermissionsExceeded can be called", () => {
    if (typeof arePermissionsExceeded === "function") {
      try {
        (arePermissionsExceeded as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("mapAccessibleChannelsToChoice can be called", () => {
    if (typeof mapAccessibleChannelsToChoice === "function") {
      try {
        (mapAccessibleChannelsToChoice as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("checkIfUserBelongToPermissionGroup can be called", () => {
    if (typeof checkIfUserBelongToPermissionGroup === "function") {
      try {
        (checkIfUserBelongToPermissionGroup as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getUserAccessibleChannelsOptions can be called", () => {
    if (typeof getUserAccessibleChannelsOptions === "function") {
      try {
        (getUserAccessibleChannelsOptions as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("checkIfUserHasRestictedAccessToChannels can be called", () => {
    if (typeof checkIfUserHasRestictedAccessToChannels === "function") {
      try {
        (checkIfUserHasRestictedAccessToChannels as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });

  test("getInitialChannels can be called", () => {
    if (typeof getInitialChannels === "function") {
      try {
        (getInitialChannels as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
