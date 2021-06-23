import React, { FunctionComponent } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'gatsby';
import { FaPhoneAlt, FaMapMarkerAlt, FaGripLinesVertical } from 'react-icons/fa';

import CssReset from '@styles/cssReset';
import 'animate.css/animate.min.css';
import theme from '@styles/theme';
import Logo from '@images/logo';
import { brandPrimaryHover } from '@styles/color';
import { baseBorderStyle } from '@styles/mixins';
import { FlexContainer, PageContainer } from '.';

type LayoutProps = {
  pageTitle?: string;
};

const StyledNav = styled.nav`
  padding: ${(props) => props.theme.sizes.baseSpacer} 0;
  z-index: 5;
  position: relative;
  background-color: rgba(0, 0, 0, 0.6);
  border-bottom: ${baseBorderStyle};
  box-shadow: 0px 8px 64px 16px rgba(70, 51, 4, 0.5);
`;

const StyledLogo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.brandPrimaryHover};

  & svg {
    transition: all 0.5s ease-in-out;
  }

  &:hover svg,
  &:focus svg {
    transform: rotate(-1080deg);
    filter: saturate(2);
  }
`;

const StyledLogoText = styled.span`
  padding-left: ${(props) => props.theme.sizes.baseSpacer};
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 1.2;
  font-size: ${(props) => props.theme.sizes.fontSizeSmall};
  transition: all 0.5s ease-in-out;

  &:hover,
  &:focus {
    color: #f7eed6;
    transform: scale(1.1);
    filter: ${(props) => `drop-shadow(0px 0px 8px ${props.theme.colors.white})`};
  }
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.brandPrimaryHover};
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
  background-color: rgba(0, 0, 0, 0.6);
  margin-top: ${(props) => props.theme.sizes.quadrupleSpacer};
  border-top: ${baseBorderStyle};
  box-shadow: 0px -8px 64px 16px rgba(70, 51, 4, 0.5);
`;

const Layout: FunctionComponent<LayoutProps> = ({ pageTitle, children }) => {
  const renderNav = () => (
    <FlexContainer justifyContent="space-between">
      <StyledLogo to="/">
        <Logo fill={brandPrimaryHover} />{' '}
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
  );
  return (
    <ThemeProvider theme={theme}>
      <div>
        {console.log(pageTitle)}
        <CssReset />
        <StyledNav>
          <PageContainer>{renderNav()}</PageContainer>
        </StyledNav>
        {children}
        <Footer>
          <PageContainer>
            {renderNav()}

            <p style={{ textAlign: 'center', opacity: 0.5, fontSize: '.8em' }}>
              <FlexContainer flexWrap="nowrap">
                <address style={{ lineHeight: 1.2, margin: '16px 0' }}>
                  <a href="https://goo.gl/maps/3NzoGQEcaE8ivsdy6">
                    <FaMapMarkerAlt /> 738 S. Washington Ave. <br />
                    Royal Oak, MI 48067 <br />
                  </a>
                </address>
                <p style={{ margin: '0px 8px' }}>
                  <FaGripLinesVertical />
                </p>
                <p style={{ margin: '16px 0' }}>
                  <a href="tel:+13234254536">
                    <FaPhoneAlt /> (323) GALILEO
                  </a>
                </p>
              </FlexContainer>
              <small>&copy; {new Date().getFullYear()} Galileo Insights</small>
            </p>
          </PageContainer>
        </Footer>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
