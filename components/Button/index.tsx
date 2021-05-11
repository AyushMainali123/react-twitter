import { colors } from "@styles/colors";
import React from "react";
import styled from "styled-components";

type Varaints = "standard" | "outlined" | "transparent";

interface IProps {
  children: React.ReactNode;
  className?: string;
  variant?: Varaints;
}

const returnBackgroundColor = (variant: Varaints) => {
  if (variant === "standard") {
    return colors.primary;
  }

  if (variant === "outlined" || variant === "transparent") {
    return colors.transparent;
  }
};

const returnTextColor = (variant: Varaints) => {
      if (variant === "standard") {
        return colors.white;
      }

      if (variant === "outlined" || variant === "transparent") {
        return colors.primary;
      }
}


const returnOutlineColor = (variant: Varaints) => {
    if (variant === "standard" || variant === "outlined") {
        return colors.primary;
    }
    if (variant === "transparent") {
        return colors.transparent;
    }
}



const StyledButton = styled.button<{ variant: Varaints }>`
  background: ${(props) => returnBackgroundColor(props.variant)};
  color: ${props => returnTextColor(props.variant)};
  outline: ${props => returnOutlineColor(props.variant)};
  cursor: pointer;
  border: none;
  padding: 12px 22px;
  border-radius: 999px;
  font-family: "Open Sans Bold";
`;

const Button = ({ children, className, variant = "standard" }: IProps) => {
  return (
    <StyledButton className={className} variant={variant}>
      {children}
    </StyledButton>
  );
};

export default Button;
