import React, { FunctionComponent } from 'react';
import styled, { keyframes } from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

import { Column, Layout, PageContainer, Row } from '@components';
import stars from '@images/stars.png';
import twinkling from '@images/twinkling2.png';
import clouds from '@images/clouds3.png';
import clouds2 from '@images/clouds2.png';
import MoonPhases from '@images/moon-phases';
import galileo from '@images/galileo.png';
import { baseBorderStyle } from '@styles/mixins';
import { doubleSpacer } from '@styles/size';

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
  background: #040f31 url(${stars}) repeat top center;
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
  animation: ${moveCloudsBack} 500s linear infinite;
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
  animation: ${moveCloudsBack} 200s linear infinite;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: right;
  padding: ${(props) => props.theme.sizes.decupleSpacer} 0;
`;

const FirstSectionBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Section = styled.section`
  position: relative;
  background: ${(props: { background?: string; reverse?: boolean }) => props.background};
  transform: ${(props) => (props.reverse ? `skew(0, 3deg)` : `skew(0, -3deg)`)};
  overflow: hidden;
  border-top: ${baseBorderStyle};
  border-bottom: ${baseBorderStyle};
`;

const SectionInner = styled.div`
  padding: 320px 0;
  transform: ${(props: { reverse?: boolean }) =>
    props.reverse ? `skew(0, -3deg)` : `skew(0, 3deg)`};
`;

const SecondSectionBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: -${(props) => props.theme.sizes.doubleSpacer};
  bottom: -${(props) => `${props.theme.sizes.baseSpacerUnit * 20}px`};
  background: url(${galileo}) no-repeat right center;
  opacity: 0.5;
`;

const SpacerWrapper = styled.div`
  padding: ${(props) => props.theme.sizes.tripleSpacer} 0;
`;

const IndexPage: FunctionComponent<Record<string, never>> = () => {
  return (
    <Layout>
      <Space>
        <Stars />
        <Twinkling />
        <Clouds />
        <Clouds2 />
      </Space>
      <main style={{ position: 'relative', zIndex: 4 }}>
        <HeroContent>
          <PageContainer>
            <Row>
              <Column md={6} mdOffset={6}>
                <ScrollAnimation animateIn="animate__fadeIn" animateOnce>
                  <h1>We make really good software</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeIn" delay={300} animateOnce>
                  <p>
                    We take teams from startup to sold with secure &amp; engaging apps tailored for
                    your customers.
                  </p>
                </ScrollAnimation>
              </Column>
            </Row>
          </PageContainer>
        </HeroContent>

        <Section background="rgba(2, 10, 34, 0.6)">
          <FirstSectionBackground style={{ transform: 'skew(0, 5deg)' }}>
            <MoonPhases fill="rgba(70, 51, 4, .75)" />
          </FirstSectionBackground>
          <SectionInner>
            <PageContainer>
              <Row>
                <Column md={4} mdOffset={1}>
                  <SpacerWrapper>
                    <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce>
                      <h2>From Startup to Sold</h2>
                      <p>
                        Having worked at Fortune 20 companies, we know how to build software that
                        integrates behind corporate firewalls
                      </p>
                    </ScrollAnimation>
                  </SpacerWrapper>
                </Column>
                <Column md={4} mdOffset={2}>
                  <SpacerWrapper>
                    <ScrollAnimation animateIn="animate__fadeInRight" animateOnce>
                      <h2>An Idea is Not Just an Idea</h2>
                      <p>
                        We work with ideas scribbled in the margins just as easily as we manage
                        existing code. We help bring concepts to life
                      </p>
                    </ScrollAnimation>
                  </SpacerWrapper>
                </Column>
              </Row>
            </PageContainer>
          </SectionInner>
        </Section>
        <Section background="rgba(70, 51, 4, 0.8)" reverse>
          <SectionInner reverse>
            <SecondSectionBackground />
            <PageContainer>
              <Row>
                <Column md={8}>
                  <ScrollAnimation animateIn="animate__fadeInDown" animateOnce>
                    <img
                      src="https://via.placeholder.com/1600x900"
                      alt=""
                      style={{ opacity: 0.5, marginBottom: doubleSpacer }}
                    />
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="animate__fadeInUp" animateOnce>
                    <h3>Galileo as a Partner</h3>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="animate__fadeInUp" delay={300} animateOnce>
                    <p>
                      We’ve worked FOR people all our careers. With Galileo, we choose to work WITH
                      partners, cooperating to create amazing technology products and solutions. We
                      look for people & companies that collaborate and want to build awesome things.
                    </p>
                  </ScrollAnimation>
                </Column>
              </Row>
            </PageContainer>
          </SectionInner>
        </Section>
        <Section background="rgba(243,228,188, 0.2)">
          <SectionInner>
            <PageContainer>
              <Row>
                <Column md={4}>
                  <SpacerWrapper>
                    <ScrollAnimation animateIn="animate__zoomIn" animateOnce>
                      <h4>Go Faster. Deliver Sooner</h4>
                      <p>
                        We are agile, collaborative teachers who do. We aren’t consultants. We apply
                        just the right amount of structure to remove chaos, and replace it with
                        velocity
                      </p>
                    </ScrollAnimation>
                  </SpacerWrapper>
                </Column>
                <Column md={4}>
                  <SpacerWrapper>
                    <ScrollAnimation animateIn="animate__zoomIn" delay={300} animateOnce>
                      <h4>We are Product People</h4>
                      <p>
                        We are businesspeople who know technology. We have decades of combined
                        experience across verticals like healthcare, manufacturing, retail, and
                        healthcare (yep, we said that twice). We don’t hawk cool tech; we promote
                        business solutions.
                      </p>
                    </ScrollAnimation>
                  </SpacerWrapper>
                </Column>
                <Column md={4}>
                  <SpacerWrapper>
                    <ScrollAnimation animateIn="animate__zoomIn" delay={600} animateOnce>
                      <h4>We know the value of everything</h4>
                      <p>
                        &apos;Value&apos; is not measured just by the lines of code alone. Value
                        comes from delivering secure, compliant solutions that connect with your
                        customers. We have the skillsets to help you ideate, define and build
                        superior solutions.
                      </p>
                    </ScrollAnimation>
                  </SpacerWrapper>
                </Column>
              </Row>
            </PageContainer>
          </SectionInner>
        </Section>
      </main>
    </Layout>
  );
};

export default IndexPage;
