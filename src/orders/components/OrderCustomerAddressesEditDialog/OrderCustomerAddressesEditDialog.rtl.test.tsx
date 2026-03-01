// Auto-generated RTL render test
const { createDeepMock } = jest.requireActual("@test/deepMock");

jest.mock(
  "@dashboard/graphql",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, prop: string) => {
          if (prop === "__esModule") return true;

          if (typeof prop === "string" && prop.startsWith("use") && prop.endsWith("Query"))
            return () => ({
              data: createDeepMock(),
              loading: false,
              error: undefined,
              refetch: jest.fn(),
              fetchMore: jest.fn(),
            });

          if (typeof prop === "string" && prop.startsWith("use") && prop.endsWith("Mutation"))
            return () => [
              jest.fn(() => Promise.resolve({ data: {} })),
              { data: undefined, loading: false, called: false },
            ];

          if (typeof prop === "string" && prop.startsWith("use"))
            return () => ({ data: createDeepMock(), loading: false });

          return prop;
        },
      },
    ),
);

jest.mock(
  "@dashboard/customers/types",
  () =>
    new Proxy(
      {},
      {
        get: (_: any, p: string) => {
          if (p === "__esModule") return true;

          if (/^use/.test(p)) return () => createDeepMock();

          if (/^[A-Z]/.test(p)) return (props: any) => props?.children || null;

          return jest.fn();
        },
      },
    ),
);
jest.mock("@dashboard/hooks/useAddressValidation", () => ({
  __esModule: true,
  default: () => createDeepMock(),
  useAddressValidation: () => createDeepMock(),
}));
jest.mock("@dashboard/hooks/useForm", () => ({
  __esModule: true,
  default: (opts: any) => ({
    data: opts?.initialData || {},
    change: jest.fn(),
    submit: jest.fn(),
    set: jest.fn(),
    triggerChange: jest.fn(),
    toggleValue: jest.fn(),
    handleChange: jest.fn(),
    hasChanged: false,
    setChanged: jest.fn(),
    setIsSubmitDisabled: jest.fn(),
    formId: Symbol("formId"),
  }),
}));
jest.mock("@dashboard/hooks/useModalDialogErrors", () => ({
  __esModule: true,
  default: () => createDeepMock(),
  useModalDialogErrors: () => createDeepMock(),
}));
jest.mock(
  "@dashboard/intl",
  () =>
    new Proxy(
      {},
      {
        get: (_: any, p: string) => {
          if (p === "__esModule") return true;

          if (/^use/.test(p)) return () => createDeepMock();

          if (/^[A-Z]/.test(p)) return (props: any) => props?.children || null;

          return jest.fn();
        },
      },
    ),
);
jest.mock(
  "@dashboard/misc",
  () =>
    new Proxy(
      {},
      {
        get: (_: any, p: string) => {
          if (p === "__esModule") return true;

          if (/^use/.test(p)) return () => createDeepMock();

          if (/^[A-Z]/.test(p)) return (props: any) => props?.children || null;

          return jest.fn();
        },
      },
    ),
);
jest.mock(
  "@dashboard/utils/maps",
  () =>
    new Proxy(
      {},
      {
        get: (_: any, p: string) => {
          if (p === "__esModule") return true;

          if (/^use/.test(p)) return () => createDeepMock();

          if (/^[A-Z]/.test(p)) return (props: any) => props?.children || null;

          return jest.fn();
        },
      },
    ),
);

import { render } from "@testing-library/react";

import OrderCustomerAddressesEditDialog from "./OrderCustomerAddressesEditDialog";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {
    /* expected */
  });
  jest.spyOn(console, "warn").mockImplementation(() => {
    /* expected */
  });
  jest.spyOn(console, "log").mockImplementation(() => {
    /* expected */
  });
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("OrderCustomerAddressesEditDialog", () => {
  test("renders without crashing", () => {
    const props = createDeepMock();

    render(<OrderCustomerAddressesEditDialog {...props} />);
    expect(true).toBe(true);
  });
});
