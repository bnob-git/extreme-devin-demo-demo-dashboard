import {
  appActivateMutation,
  appCreateMutation,
  appDeactivateMutation,
  appDeleteFailedInstallationMutation,
  appDeleteMutation,
  appFetchMutation,
  appInstallMutation,
  appRetryInstallMutation,
  appTokenCreateMutation,
  appTokenDeleteMutation,
  appUpdateMutation,
  appUpdatePermissions,
  pluginUpdate,
  webhookCreate,
  webhookDelete,
  webhookUpdate,
} from "./mutations";

describe("extensions/mutations.ts", () => {
  it("should export appActivateMutation", () => {
    expect(appActivateMutation).toBeDefined();
  });

  it("should export appCreateMutation", () => {
    expect(appCreateMutation).toBeDefined();
  });

  it("should export appDeactivateMutation", () => {
    expect(appDeactivateMutation).toBeDefined();
  });

  it("should export appDeleteFailedInstallationMutation", () => {
    expect(appDeleteFailedInstallationMutation).toBeDefined();
  });

  it("should export appDeleteMutation", () => {
    expect(appDeleteMutation).toBeDefined();
  });

  it("should export appFetchMutation", () => {
    expect(appFetchMutation).toBeDefined();
  });

  it("should export appInstallMutation", () => {
    expect(appInstallMutation).toBeDefined();
  });

  it("should export appRetryInstallMutation", () => {
    expect(appRetryInstallMutation).toBeDefined();
  });

  it("should export appTokenCreateMutation", () => {
    expect(appTokenCreateMutation).toBeDefined();
  });

  it("should export appTokenDeleteMutation", () => {
    expect(appTokenDeleteMutation).toBeDefined();
  });

  it("should export appUpdateMutation", () => {
    expect(appUpdateMutation).toBeDefined();
  });

  it("should export appUpdatePermissions", () => {
    expect(appUpdatePermissions).toBeDefined();
  });

  it("should export pluginUpdate", () => {
    expect(pluginUpdate).toBeDefined();
  });

  it("should export webhookCreate", () => {
    expect(webhookCreate).toBeDefined();
  });

  it("should export webhookDelete", () => {
    expect(webhookDelete).toBeDefined();
  });

  it("should export webhookUpdate", () => {
    expect(webhookUpdate).toBeDefined();
  });
});
