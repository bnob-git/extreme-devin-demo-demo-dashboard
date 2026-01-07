import { isExternalURL } from "@dashboard/utils/urls";
import { IconButton as MacawNextIconButton, IconButtonProps } from "@saleor/macaw-ui-next";
import * as React from "react";
import { Link } from "react-router-dom";

interface CustomIconButtonProps extends Omit<IconButtonProps, "as"> {
  href?: string;
}

const _IconButton = React.forwardRef<HTMLButtonElement, CustomIconButtonProps>(
  ({ href, ...props }, ref) => {
    if (href && !isExternalURL(href)) {
      return <MacawNextIconButton {...props} as={Link} to={href} ref={ref} />;
    }

    if (href) {
      return <MacawNextIconButton {...props} as="a" href={href} ref={ref} />;
    }

    return <MacawNextIconButton {...props} ref={ref} />;
  },
);

_IconButton.displayName = "IconButton";

export const IconButton = _IconButton;
