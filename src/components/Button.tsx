import React, { CSSProperties, FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { baseAndAHalfSpacer, baseSpacer, halfSpacer, inputHeight } from '@styles/size';
import { fontFamilySansSerif, fontSizeBase } from '@styles/typography';
import { black, brandPrimary, brandPrimaryHover } from '@styles/color';
import { baseBorderStyle, disabledStyle } from '@styles/mixins';

export type ButtonProps = {
  type: 'submit' | 'button' | 'reset' | 'link';
  rightSpacer?: boolean;
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
  to?: string;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  block?: boolean;
  style?: CSSProperties;
};

const allStyles = css`
  position: relative;
  display: inline-flex;
  ${(props: ButtonProps) => props.block && 'width: 100%;'}
  font-family: ${fontFamilySansSerif};
  font-weight: bold;
  font-size: ${fontSizeBase};
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  border: ${baseBorderStyle};
  letter-spacing: 1px;
  line-height: 1.5;
  padding: ${halfSpacer} ${baseAndAHalfSpacer};
  height: ${inputHeight};
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  background-color: ${brandPrimary};
  color: ${black};

  &:hover,
  &:focus {
    background-color: ${brandPrimaryHover};
  }

  /* Disabled state for all other variations: adds opacity and cursor/pointer-events styling */
  ${(props: ButtonProps) => props.disabled && disabledStyle}

  /* When button is next to other items, use rightSpacer give them some breathing room */
  ${(props: ButtonProps) => props.rightSpacer && `margin-right: ${baseSpacer};`}
  
  &:active,
  &:focus {
    outline: none;
    filter: brightness(0.85);
  }
`;

const StyledButton = styled.button`
  ${allStyles}
`;

const StyledLink = styled.span`
  ${allStyles}
  padding: 0; /* remove padding from parent div and use in <a> below */

  & > a {
    padding: ${halfSpacer} ${baseAndAHalfSpacer};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: inherit !important;

    &:hover,
    &:focus {
      color: inherit !important;
    }
  }
`;

const Button: FunctionComponent<ButtonProps> = ({
  rightSpacer,
  to,
  children,
  type,
  onClick,
  disabled,
  iconLeft,
  iconRight,
  block,
  style,
}) => {
  if (type === 'link' && to) {
    return (
      <StyledLink
        rightSpacer={rightSpacer}
        disabled={disabled}
        block={block}
        type={type}
        style={style}
        onClick={onClick} // so we can track analytics if passed in on Button Links
      >
        <AniLink paintDrip to={to} color="rgba(0,0,0,.9)">
          {iconLeft}&nbsp;{children}&nbsp;{iconRight}
        </AniLink>
      </StyledLink>
    );
  }

  if (type !== 'link') {
    return (
      <StyledButton
        type={type}
        rightSpacer={rightSpacer}
        onClick={onClick}
        block={block}
        disabled={disabled}
        style={style}
      >
        {iconLeft}&nbsp;{children}&nbsp;{iconRight}
      </StyledButton>
    );
  }
  return null;
};

export default Button;
