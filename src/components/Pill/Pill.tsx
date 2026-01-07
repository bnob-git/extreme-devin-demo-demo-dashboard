import { getStatusColor, PillStatusType } from "@dashboard/misc";
import { Box, Chip, Text, useTheme } from "@saleor/macaw-ui-next";
import clsx from "clsx";
import { CSSProperties, forwardRef, ReactNode } from "react";

export interface CustomPillProps {
  color: PillStatusType;
  label?: string;
  icon?: ReactNode;
  className?: string;
  style?: CSSProperties;
  "data-test-id"?: string;
}

export const Pill = forwardRef<HTMLDivElement, CustomPillProps>(
  ({ color: status, label, icon, className, style, ...props }, ref) => {
    const { theme: currentTheme } = useTheme();

    const colors = getStatusColor({
      status: status,
      currentTheme,
    });

    return (
      <Chip
        ref={ref}
        className={clsx(className)}
        style={{
          backgroundColor: colors.base,
          borderColor: colors.border,
          borderWidth: "1px",
          borderStyle: "solid",
          ...style,
        }}
        data-test-id={props["data-test-id"]}
      >
        <Box display="flex" alignItems="center" gap={1}>
          {icon}
          <Text size={2} fontWeight="medium" style={{ color: colors.text }}>
            {label}
          </Text>
        </Box>
      </Chip>
    );
  },
);

Pill.displayName = "Pill";
