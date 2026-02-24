import {
  configurationItemFragment,
  paymentGatewayFragment,
  pluginBaseFragment,
  pluginConfigurationBaseFragment,
  pluginConfigurationExtendedFragment,
  pluginsDetailsFragment,
} from "./plugins";

describe("fragments/plugins.ts", () => {
  it("should export configurationItemFragment", () => {
    expect(configurationItemFragment).toBeDefined();
  });

  it("should export paymentGatewayFragment", () => {
    expect(paymentGatewayFragment).toBeDefined();
  });

  it("should export pluginBaseFragment", () => {
    expect(pluginBaseFragment).toBeDefined();
  });

  it("should export pluginConfigurationBaseFragment", () => {
    expect(pluginConfigurationBaseFragment).toBeDefined();
  });

  it("should export pluginConfigurationExtendedFragment", () => {
    expect(pluginConfigurationExtendedFragment).toBeDefined();
  });

  it("should export pluginsDetailsFragment", () => {
    expect(pluginsDetailsFragment).toBeDefined();
  });
});
