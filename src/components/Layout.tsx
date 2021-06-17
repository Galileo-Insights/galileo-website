import React, { FunctionComponent } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'gatsby';

import CssReset from '@styles/cssReset';
import 'animate.css/animate.min.css';
import theme from '@styles/theme';
import Logo from '@images/logo';
import { brandPrimary } from '@styles/color';
import { baseBorderStyle } from '@styles/mixins';
import { baseSpacer } from '@styles/size';
import { FlexContainer, PageContainer, Row, Column } from '.';

type LayoutProps = {
  pageTitle?: string;
};

const StyledNav = styled.nav`
  padding: ${(props) => props.theme.sizes.baseSpacer} 0;
  z-index: 5;
  position: relative;
  background-color: rgba(0, 8, 31, 1);
  border-bottom: ${baseBorderStyle};
  box-shadow: 0px 8px 64px 16px rgba(70, 51, 4, 0.5);
`;

const StyledLogo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    transition: all 0.5s ease-in-out;
  }

  &:hover svg,
  &:focus svg {
    transform: rotate(-355deg);
    opacity: 0.5;
  }
`;

const StyledLogoText = styled.span`
  padding-left: ${(props) => props.theme.sizes.baseSpacer};
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 1.2;
  font-size: ${(props) => props.theme.sizes.fontSizeSmall};
`;

const StyledLink = styled(Link)`
  padding: ${(props) => props.theme.sizes.halfSpacer};
  font-size: ${(props) => props.theme.sizes.fontSizeSmall};
  font-weight: 700;
  text-transform: uppercase;
  &:hover,
  &:focus {
    filter: ${(props) => `drop-shadow(0px 0px 8px ${props.theme.colors.brandPrimary})`};
  }
`;

const Footer = styled.footer`
  padding: ${(props) => props.theme.sizes.baseSpacer} 0;
  z-index: 5;
  position: relative;
  background-color: rgba(0, 8, 31, 1);
  margin-top: ${(props) => props.theme.sizes.quadrupleSpacer};
  border-top: ${baseBorderStyle};
  box-shadow: 0px -8px 64px 16px rgba(70, 51, 4, 0.5);
`;

const Layout: FunctionComponent<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        {console.log(pageTitle)}
        <CssReset />
        <StyledNav>
          <PageContainer>
            <FlexContainer justifyContent="space-between">
              <StyledLogo to="/">
                <Logo fill={brandPrimary} />{' '}
                <StyledLogoText>
                  Galileo
                  <br />
                  Insights
                </StyledLogoText>
              </StyledLogo>
              <div>
                <StyledLink to="/">Services</StyledLink>
                <StyledLink to="/">Work</StyledLink>
                <StyledLink to="/">Contact</StyledLink>
              </div>
            </FlexContainer>
          </PageContainer>
        </StyledNav>
        {children}
        <Footer>
          <PageContainer>
            <Row>
              <Column md={8}>
                <FlexContainer justifyContent="flex-start">
                  <StyledLogo to="/">
                    <Logo fill={brandPrimary} />{' '}
                    <StyledLogoText>
                      Galileo
                      <br />
                      Insights
                    </StyledLogoText>
                  </StyledLogo>
                  <div style={{ marginLeft: baseSpacer }}>
                    <StyledLink to="/">Services</StyledLink>
                    <StyledLink to="/">Work</StyledLink>
                    <StyledLink to="/">Contact</StyledLink>
                  </div>
                </FlexContainer>
              </Column>
              <Column md={4}>
                <address style={{ lineHeight: 1.2, textAlign: 'right' }}>
                  738 S. Washington Ave. <br />
                  Royal Oak, MI 48067 <br />
                  123-123-1234
                </address>
              </Column>
            </Row>
            <p style={{ textAlign: 'center', opacity: 0.5 }}>
              <small>&copy; {new Date().getFullYear()} Galileo Insights</small>
            </p>
          </PageContainer>
        </Footer>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
