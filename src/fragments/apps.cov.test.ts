import {
  appAvatarFragment,
  appEventDeliveriesFragment,
  appFragment,
  appInstallationFragment,
  appListItemFragment,
  appManifestFragment,
  appPermissionFragment,
  InstalledApp,
  InstalledAppDetails,
  webhookAttemptFragment,
} from "./apps";

describe("fragments/apps.ts", () => {
  it("should export InstalledApp", () => {
    expect(InstalledApp).toBeDefined();
  });

  it("should export InstalledAppDetails", () => {
    expect(InstalledAppDetails).toBeDefined();
  });

  it("should export appAvatarFragment", () => {
    expect(appAvatarFragment).toBeDefined();
  });

  it("should export appEventDeliveriesFragment", () => {
    expect(appEventDeliveriesFragment).toBeDefined();
  });

  it("should export appFragment", () => {
    expect(appFragment).toBeDefined();
  });

  it("should export appInstallationFragment", () => {
    expect(appInstallationFragment).toBeDefined();
  });

  it("should export appListItemFragment", () => {
    expect(appListItemFragment).toBeDefined();
  });

  it("should export appManifestFragment", () => {
    expect(appManifestFragment).toBeDefined();
  });

  it("should export appPermissionFragment", () => {
    expect(appPermissionFragment).toBeDefined();
  });

  it("should export webhookAttemptFragment", () => {
    expect(webhookAttemptFragment).toBeDefined();
  });
});
