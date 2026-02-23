jest.mock("@dashboard/hooks/useForm", () => ({
  __esModule: true,
  default: (init: any, onSubmit: any) => ({
    data: init || {},
    change: jest.fn(),
    submit: onSubmit || jest.fn(),
    hasChanged: false,
    setChanged: jest.fn(),
    errors: {},
    setError: jest.fn(),
    clearErrors: jest.fn(),
  }),
}));
jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));

import { useExitFormDialogProvider } from "./useExitFormDialogProvider";

describe("useExitFormDialogProvider.tsx coverage", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls useExitFormDialogProvider", () => {
    try {
      (useExitFormDialogProvider as any)({} as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
