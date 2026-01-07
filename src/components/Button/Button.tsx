import { isExternalURL } from "@dashboard/utils/urls";
import { Button as MacawNextButton, ButtonProps } from "@saleor/macaw-ui-next";
import { forwardRef } from "react";
import { Link } from "react-router-dom";

export interface CustomButtonProps extends Omit<ButtonProps, "as"> {
  href?: string;
}

const _Button = forwardRef<HTMLButtonElement, CustomButtonProps>(({ href, ...props }, ref) => {
  if (href && !isExternalURL(href)) {
    return <MacawNextButton {...props} as={Link} to={href} ref={ref} />;
  }

  if (href) {
    return <MacawNextButton {...props} as="a" href={href} ref={ref} />;
  }

  return <MacawNextButton {...props} ref={ref} />;
});

_Button.displayName = "Button";

export const Button = _Button;
