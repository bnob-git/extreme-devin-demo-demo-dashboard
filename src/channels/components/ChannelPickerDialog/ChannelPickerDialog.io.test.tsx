import ChannelPickerDialog from "./ChannelPickerDialog";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("ChannelPickerDialog", () => {
  test("default export is defined", () => {
    expect(ChannelPickerDialog).toBeDefined();
  });
});
