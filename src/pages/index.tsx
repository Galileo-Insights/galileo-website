import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { StaticImage } from 'gatsby-plugin-image';

import {
  Button,
  Column,
  Heading,
  Layout,
  PageContainer,
  Row,
  Section,
  SectionInner,
  Seo,
} from '@components';
import MoonPhases from '@images/moon-phases';
import galileo from '@images/galileo.png';
import drawing from '@images/drawing.png';
import { doubleSpacer } from '@styles/size';

const FirstSectionBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
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

const ThirdSectionBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: -${(props) => props.theme.sizes.decupleSpacer};
  background: url(${drawing}) no-repeat left center;
  opacity: 0.25;
`;

const SpacerWrapper = styled.div`
  padding: ${(props) => props.theme.sizes.tripleSpacer} 0;
`;

const HeroText = styled.div`
  padding: ${(props) => props.theme.sizes.doubleSpacer} 0;
`;

const IndexPage: FunctionComponent<Record<string, never>> = () => {
  return (
    <Layout>
      <Seo title="About Us" />
      <main style={{ position: 'relative', zIndex: 4 }}>
        <div style={{ display: 'grid' }}>
          <StaticImage
            style={{ gridArea: '1/1', maxWidth: 800, margin: '0 auto' }}
            layout="constrained"
            alt=""
            src="../images/index-hero-mobile.png"
            formats={['auto']}
          />
        </div>
        <HeroText>
          <PageContainer>
            <Heading align="center" style={{ fontSize: '3em' }}>
              We make really good software.
            </Heading>
          </PageContainer>
        </HeroText>
        <Section background="rgba(0, 0, 0, 0.6)">
          <FirstSectionBackground style={{ transform: 'skew(0, 5deg)' }}>
            <MoonPhases fill="#2d2d2d" />
          </FirstSectionBackground>
          <SectionInner>
            <PageContainer>
              <Row>
                <Column md={4} mdOffset={1}>
                  <SpacerWrapper>
                    <ScrollAnimation animateIn="animate__fadeInLeft">
                      <Heading as="h2">From Startup to Sold</Heading>
                      <p>
                        Having worked at Fortune 20 companies, we know how to build software that
                        integrates behind corporate firewalls.
                      </p>
                    </ScrollAnimation>
                  </SpacerWrapper>
                </Column>
                <Column md={4} mdOffset={2}>
                  <SpacerWrapper>
                    <ScrollAnimation animateIn="animate__fadeInRight">
                      <Heading as="h2">An Idea is Not Just an Idea</Heading>
                      <p>
                        We work with ideas scribbled in the margins just as easily as we manage
                        existing code. We help bring concepts to life.
                      </p>
                    </ScrollAnimation>
                  </SpacerWrapper>
                </Column>
              </Row>
            </PageContainer>
          </SectionInner>
        </Section>
        <Section background="rgba(61, 117, 100, 0.8)" reverse>
          <SectionInner reverse>
            <SecondSectionBackground />
            <PageContainer>
              <Row>
                <Column md={8}>
                  <ScrollAnimation animateIn="animate__fadeInDown">
                    <img
                      src="https://via.placeholder.com/1600x900"
                      alt=""
                      style={{ opacity: 0.5, marginBottom: doubleSpacer }}
                    />
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="animate__fadeInUp">
                    <Heading as="h3">Galileo as a Partner</Heading>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="animate__fadeInUp" delay={300}>
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
        <Section background="rgba(251,248,226,.3)">
          <SectionInner>
            <ThirdSectionBackground />
            <PageContainer>
              <Row>
                <Column md={6}>
                  <SpacerWrapper>
                    <ScrollAnimation animateIn="animate__zoomIn">
                      <Heading as="h4">Go Faster. Deliver Sooner</Heading>
                      <p>
                        <small>
                          We are agile, collaborative teachers who do. We aren’t consultants. We
                          apply just the right amount of structure to remove chaos, and replace it
                          with velocity.
                        </small>
                      </p>
                    </ScrollAnimation>
                  </SpacerWrapper>
                </Column>
              </Row>
              <Row>
                <Column md={6} mdOffset={3}>
                  <SpacerWrapper>
                    <ScrollAnimation animateIn="animate__zoomIn" delay={300}>
                      <Heading as="h4">We are Product People</Heading>
                      <p>
                        <small>
                          We are businesspeople who know technology. We have decades of combined
                          experience across verticals like healthcare, manufacturing, retail, and
                          healthcare (yep, we said that twice). We don’t hawk cool tech; we promote
                          business solutions.
                        </small>
                      </p>
                    </ScrollAnimation>
                  </SpacerWrapper>
                </Column>
              </Row>
              <Row>
                <Column md={6} mdOffset={6}>
                  <SpacerWrapper>
                    <ScrollAnimation animateIn="animate__zoomIn" delay={600}>
                      <Heading as="h4">We Know the Value of Everything</Heading>
                      <p>
                        <small>
                          &apos;Value&apos; is not measured just by the lines of code alone. Value
                          comes from delivering secure, compliant solutions that connect with your
                          customers. We have the skillsets to help you ideate, define and build
                          superior solutions.
                        </small>
                      </p>
                    </ScrollAnimation>
                  </SpacerWrapper>
                </Column>
              </Row>
            </PageContainer>
          </SectionInner>
        </Section>
        <Section background="rgba(120,120,120, 0.2)" reverse>
          <SectionInner reverse>
            <PageContainer>
              <ScrollAnimation animateIn="animate__zoomIn">
                <p>
                  <small>
                    Interested in learning more about us? We&apos;d love to have a chat.
                  </small>
                </p>
                <Button type="link" to="/contact">
                  Let&apos;s Talk
                </Button>
              </ScrollAnimation>
            </PageContainer>
          </SectionInner>
        </Section>
      </main>
    </Layout>
  );
};

export default IndexPage;
