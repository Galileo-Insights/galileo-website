import React, { FunctionComponent } from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import 'animate.css/animate.min.css';

import CssReset from '@styles/cssReset';
import theme from '@styles/theme';
import Logo from '@images/logo';
import { brandPrimaryHover } from '@styles/color';
import { baseBorderStyle } from '@styles/mixins';
import stars from '@images/stars.png';
import twinkling from '@images/twinkling.png';
import clouds from '@images/clouds3.png';
import clouds2 from '@images/clouds2.png';
import { FlexContainer, PageContainer } from '.';

type LayoutProps = unknown;

const StyledNav = styled.nav`
  padding: ${(props) => props.theme.sizes.quarterSpacer} 0;
  z-index: 5;
  position: relative;
  background-color: rgba(0, 0, 0, 0.6);
  border-bottom: ${baseBorderStyle};
  box-shadow: 0px 8px 64px 16px rgba(70, 51, 4, 0.5);
`;

const StyledLogo = styled(AniLink)`
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

  &:hover span,
  &:focus span {
    color: #f7eed6;
    transform: scale(1.1);
    filter: ${(props) => `drop-shadow(0px 0px 8px ${props.theme.colors.white})`};
  }
`;

const StyledLogoText = styled.span`
  padding-left: ${(props) => props.theme.sizes.baseSpacer};
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 1.2;
  font-size: ${(props) => props.theme.sizes.fontSizeSmall};
  transition: all 0.5s ease-in-out;
`;

const StyledLink = styled(AniLink)`
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
  padding: ${(props) => props.theme.sizes.quarterSpacer} 0;
  z-index: 5;
  position: relative;
  background-color: rgba(0, 0, 0, 0.6);
  margin-top: ${(props) => props.theme.sizes.quadrupleSpacer};
  border-top: ${baseBorderStyle};
  box-shadow: 0px -8px 64px 16px rgba(70, 51, 4, 0.5);
`;

const moveTwinkBack = keyframes`
  from { background-position: 0 0; }
  to { background-position: -10000px 5000px; }
`;

const moveCloudsBack = keyframes`
  from { background-position: 0 0; }
  to { background-position: 10000px 0; }
`;

const Space = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Stars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  background: #000000 url(${stars}) repeat top center;
  z-index: 0;
`;

const Twinkling = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  background: transparent url(${twinkling}) repeat top center;
  z-index: 1;
  animation: ${moveTwinkBack} 200s linear infinite;
`;

const Clouds = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  background: transparent url(${clouds}) repeat top center;
  z-index: 2;
  opacity: 0.5;
  animation: ${moveCloudsBack} 1000s linear infinite;
`;

const Clouds2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  background: transparent url(${clouds2}) repeat top center;
  z-index: 3;
  opacity: 0.5;
  animation: ${moveCloudsBack} 400s linear infinite;
`;

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const renderNav = () => (
    <FlexContainer justifyContent="space-between">
      <StyledLogo to="/" paintDrip color="rgba(0,0,0,.9)">
        <Logo fill={brandPrimaryHover} />{' '}
        <StyledLogoText>
          Galileo
          <br />
          Insights
        </StyledLogoText>
      </StyledLogo>
      <div>
        <StyledLink to="/" paintDrip color="rgba(0,0,0,.9)">
          Home
        </StyledLink>
        <StyledLink to="/services" paintDrip color="rgba(0,0,0,.9)">
          Services
        </StyledLink>
        <StyledLink to="/work" paintDrip color="rgba(0,0,0,.9)">
          Work
        </StyledLink>
        <StyledLink to="/contact" paintDrip color="rgba(0,0,0,.9)">
          Contact
        </StyledLink>
      </div>
    </FlexContainer>
  );
  return (
    <ThemeProvider theme={theme}>
      <div>
        <CssReset />
        <StyledNav>
          <PageContainer>{renderNav()}</PageContainer>
        </StyledNav>
        <Space>
          <Stars />
          <Twinkling />
          <Clouds />
          <Clouds2 />
        </Space>
        {children}
        <Footer>
          <PageContainer>
            {renderNav()}

            <div style={{ opacity: 0.5, fontSize: '.8em' }}>
              <FlexContainer justifyContent="space-between">
                <address style={{ lineHeight: 1.2, margin: '16px 0' }}>
                  <a href="https://goo.gl/maps/3NzoGQEcaE8ivsdy6">
                    <FaMapMarkerAlt /> 738 S. Washington Ave. <br />
                    Royal Oak, MI 48067 <br />
                  </a>
                </address>
                <p style={{ margin: '16px 0' }}>
                  <a href="tel:+13234254536">
                    <FaPhoneAlt /> (323) GALILEO
                  </a>
                </p>
              </FlexContainer>
              <small>&copy; {new Date().getFullYear()} Galileo Insights</small>
            </div>
          </PageContainer>
        </Footer>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
