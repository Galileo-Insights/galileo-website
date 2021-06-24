import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import ScrollAnimation from 'react-animate-on-scroll';

import { Layout, Heading, Section, SectionInner, PageContainer, Row, Column } from '@components';
import Orbits from '@images/orbits';

type WorkProps = unknown;

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

const Work: FunctionComponent<WorkProps> = () => {
  return (
    <Layout>
      <main style={{ position: 'relative', zIndex: 4 }}>
        <div style={{ display: 'grid' }}>
          <StaticImage
            style={{ gridArea: '1/1' }}
            layout="fullWidth"
            aspectRatio={16 / 9}
            alt=""
            src="../images/Compass-On-Old-World-Map-With-Navigational-Lines-On-Textured-Surface-1053985508_2125x1416.jpeg"
            formats={['auto']}
          />
          <div
            style={{
              gridArea: '1/1',
              position: 'relative',
              placeItems: 'center flex-start',
              display: 'grid',
            }}
          >
            <div
              style={{
                maxWidth: '80vw',
                borderRadius: '0 96px 3px 0',
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
              >
                We Truly Like What We’ve Done
              </Heading>
              <p style={{ color: 'rgba(0,0,0,.8)' }}>
                The past may not be a predictor of the future, but al the same, we have done some
                pretty awesome stuff!
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
                  <ScrollAnimation animateIn="animate__fadeInRight">
                    <Heading as="h2">
                      The Galileo team are technology-savvy businesspeople with a bias for action
                      and a passion for improving healthcare
                    </Heading>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="animate__fadeInLeft" delay={300}>
                    <p>
                      <small>
                        OK, so we like healthcare. A lot. It is our bread and butter and we cut our
                        teeth making some really cool stuff at a Fortune 20 company in that space.
                        We should also mention that we grew up at another Fortune 20 company in
                        automotive. We love working with big companies and we love working with
                        start-ups that hope to one day be that big company or maybe partner with
                        them. In either case, we know what it takes to get software enterprise level
                        because that is either where you are or where you want to be.
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
              <Heading as="h3">Previous Engagements</Heading>
              <p>
                We work with a lot of discretion. Your work is proprietary as are many of our
                clients’. We would love to talk and explain a little more, but perhaps like you, a
                lot of our clients do not like to broadcast what they are doing
              </p>
              <Row>
                <Column>
                  <Heading as="h4">EHR Integration</Heading>
                  <p>
                    <small>
                      We created a HIPAA compliant product to interface to major payer FHIR
                      services, transform the results and integrates into the EHR workstream.
                    </small>
                  </p>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Heading as="h4">Physician Quality</Heading>
                  <p>
                    <small>
                      We put together a solution that collected e-consents that allowed physician
                      groups to send quality scores to CMS.
                    </small>
                  </p>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Heading as="h4">Cancer Detection</Heading>
                  <p>
                    <small>
                      We work with a great group employing Machine Learning & AI to detect different
                      cancer cells.
                    </small>
                  </p>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Heading as="h4">Realty App</Heading>
                  <p>
                    <small>
                      This is a cool one! An app for realtors, homebuyers, sellers that evens the
                      playing field with negotiations!
                    </small>
                  </p>
                </Column>
              </Row>
            </PageContainer>
          </SectionInner>
        </Section>
        <Section background="rgba(120,120,120, 0.2)">
          <SectionInner>
            <ThirdSectionBackground />
            <PageContainer>
              <ScrollAnimation animateIn="animate__zoomIn">
                <p>
                  <small>
                    We have a lot more, but let’s talk a little and see what we can do for you!
                  </small>
                </p>
              </ScrollAnimation>
            </PageContainer>
          </SectionInner>
        </Section>
      </main>
    </Layout>
  );
};

export default Work;
