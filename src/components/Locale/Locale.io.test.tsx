import { Locale, LocaleContext, localeNames } from "./Locale";

beforeEach(() => { jest.spyOn(console, "error").mockImplementation(() => {}); jest.spyOn(console, "warn").mockImplementation(() => {}); });
afterEach(() => { jest.restoreAllMocks(); });

describe("Locale", () => {
  test("Locale is exported", () => {
    expect(Locale).toBeDefined();
  });

  test("localeNames is exported", () => {
    expect(localeNames).toBeDefined();
  });

  test("LocaleContext is exported", () => {
    expect(LocaleContext).toBeDefined();
  });

});