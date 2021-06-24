import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import ScrollAnimation from 'react-animate-on-scroll';

import { Layout, Heading, Section, SectionInner, PageContainer, Row, Column } from '@components';
import Orbits from '@images/orbits';

type ServicesProps = unknown;

const FirstSectionBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  & svg {
    width: 2000px;
  }
`;

const SecondSectionBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: -${(props) => props.theme.sizes.doubleSpacer};
  bottom: -${(props) => `${props.theme.sizes.baseSpacerUnit * 20}px`};
  opacity: 0.5;
`;

const ThirdSectionBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: -${(props) => props.theme.sizes.decupleSpacer};
  opacity: 0.25;
`;

const SpacerWrapper = styled.div`
  padding: ${(props) => props.theme.sizes.tripleSpacer} 0;
`;

const Services: FunctionComponent<ServicesProps> = () => {
  return (
    <Layout>
      <main style={{ position: 'relative', zIndex: 4 }}>
        <div style={{ display: 'grid' }}>
          <StaticImage
            style={{ gridArea: '1/1' }}
            layout="fullWidth"
            aspectRatio={16 / 9}
            alt=""
            src="../images/0a0a97ff878e72c49d83b78043c2881e.jpeg"
            formats={['auto']}
          />
          <div
            style={{
              gridArea: '1/1',
              position: 'relative',
              placeItems: 'center flex-end',
              display: 'grid',
            }}
          >
            <div
              style={{
                maxWidth: '80vw',
                borderRadius: '96px 0 0 3px',
                backgroundColor: 'rgba(251,248,226,.6)',
                padding: '16px',
              }}
            >
              <Heading
                as="h1"
                style={{
                  color: 'rgba(0,0,0,.8)',
                  fontSize: '2em',
                }}
                align="right"
              >
                We Don&apos;t Follow a Script.
              </Heading>
              <p style={{ color: 'rgba(0,0,0,.8)', textAlign: 'right' }}>
                Each Project is unique, facing different constraints and offering tons of possible
                solutions. We don’t offer a one-size fits all model, because there really isn’t one.
              </p>
            </div>
          </div>
        </div>
        <Section background="rgba(0, 0, 0, 0.6)">
          <FirstSectionBackground>
            <Orbits fill="#2d2d2d" />
          </FirstSectionBackground>
          <SectionInner>
            <PageContainer>
              <Row>
                <Column md={8} mdOffset={2}>
                  <ScrollAnimation animateIn="animate__zoomIn">
                    <Heading as="h2">What we do</Heading>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="animate__zoomIn" delay={300}>
                    <p>
                      <small>
                        Galileo offers a wide variety of services to get your product where you want
                        it to be. When assessing work, we listen to you, understanding the
                        complexities and all possible opportunities. We promise to give honest and
                        respectful feedback, explaining where we could help the most and if we would
                        not be a great fit. We have a hard-working, highly-skilled, and experienced
                        team with far ranging skillsets that loves to collaborate and code.
                      </small>
                    </p>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="animate__zoomIn" delay={600}>
                    <p>
                      <small>
                        We partner, in the truest sense of the word. Our ideal is to take some of
                        your risk and model the engagement with an equity agreement. We will will
                        put hands to keyboards and do time & materials like the larger shops, but
                        our preference is to put our money where our mouth is. We see relationships
                        as a two-way street, and we look for opportunities for our partners as well.
                        Give us a call and let’s see if this is a win-win scenario.
                      </small>
                    </p>
                  </ScrollAnimation>
                </Column>
              </Row>
            </PageContainer>
          </SectionInner>
        </Section>
        <Section background="rgba(61, 117, 100, 0.8)" reverse>
          <SectionInner reverse>
            <SecondSectionBackground />
            <PageContainer>
              <ScrollAnimation animateIn="animate__fadeInRight">
                <Heading as="h3">Galileo Pod</Heading>
              </ScrollAnimation>
              <ScrollAnimation animateIn="animate__fadeInLeft" delay={300}>
                <p>
                  We firmly believe Product, Development, & UX working together create better
                  projects. This is not unique but weighting each equally and putting them in the
                  same room is.
                </p>
              </ScrollAnimation>
            </PageContainer>
          </SectionInner>
        </Section>
        <Section background="rgba(120,120,120, 0.2)">
          <SectionInner>
            <ThirdSectionBackground />
            <PageContainer>
              <Row>
                <Column md={6} mdOffset={6}>
                  <SpacerWrapper>
                    <ScrollAnimation animateIn="animate__zoomIn">
                      <Heading as="h4">Light-Weight Methodology</Heading>
                      <p>
                        <small>
                          We treat each project as its own entity, so our methodology is malleable
                          to your specific needs. We provide guidelines, but not bureaucracy. We
                          utilize Scrum, a light-weight structure to our projects so you have vision
                          to the day- to-day but are not bogged down by project management.
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
                      <Heading as="h4">Full Stack Capabilities</Heading>
                      <p>
                        <small>
                          We are a .NET & React shop. At least that’s our sweet spot. We sprinkle in
                          architects to make we just don’t program blindly; instead, we make curated
                          art. We flex up and down based on your needs and are always looking
                          reasons to add to our skill set. In the end, we code. We code with a plan.
                        </small>
                      </p>
                    </ScrollAnimation>
                  </SpacerWrapper>
                </Column>
              </Row>
              <Row>
                <Column md={6}>
                  <SpacerWrapper>
                    <ScrollAnimation animateIn="animate__zoomIn" delay={600}>
                      <Heading as="h4">UX, Research & Product</Heading>
                      <p>
                        <small>
                          Understanding your customers, your users, and the market elevates your
                          concept from a great idea to a solution. We do research ranging from app
                          analysis to full on user testing and everything in between. We study your
                          market and look at your competitors. We love tech, but we also understand
                          there is a context and people who use technology.
                        </small>
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

export default Services;
