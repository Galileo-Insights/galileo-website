import 'styled-components';

interface IPalette {
  main: string;
  contrastText: string;
}
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      brandPrimary: string;
      brandPrimaryHover: string;
      brandSecondary: string;
      white: string;
      black: string;
    };
    sizes: {
      quarterSpacer: string;
      halfSpacer: string;
      threeQuarterSpacer: string;
      baseSpacer: string;
      baseAndAHalfSpacer: string;
      doubleSpacer: string;
      tripleSpacer: string;
      quadrupleSpacer: string;
      sextupleSpacer: string;
      octupleSpacer: string;
      decupleSpacer: string;
      baseSpacerUnit: number;
      fontSizeSmall: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
