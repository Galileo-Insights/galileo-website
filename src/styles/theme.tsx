import { DefaultTheme } from 'styled-components';

import { brandPrimary, brandPrimaryHover, brandSecondary, white, black } from './color';
import {
  quarterSpacer,
  halfSpacer,
  threeQuarterSpacer,
  baseSpacer,
  baseAndAHalfSpacer,
  doubleSpacer,
  tripleSpacer,
  quadrupleSpacer,
  sextupleSpacer,
  octupleSpacer,
  decupleSpacer,
  baseSpacerUnit,
  breakpoints,
} from './size';
import { fontSizeSmall } from './typography';

const theme: DefaultTheme = {
  colors: {
    brandPrimary,
    brandPrimaryHover,
    brandSecondary,
    white,
    black,
  },
  sizes: {
    quarterSpacer,
    halfSpacer,
    threeQuarterSpacer,
    baseSpacer,
    baseAndAHalfSpacer,
    doubleSpacer,
    tripleSpacer,
    quadrupleSpacer,
    sextupleSpacer,
    octupleSpacer,
    decupleSpacer,
    baseSpacerUnit,
    fontSizeSmall,
  },
  breakpoints: {
    xs: breakpoints.xs,
    sm: breakpoints.sm,
    md: breakpoints.md,
    lg: breakpoints.lg,
    xl: breakpoints.xl,
  },
};

export default theme;
