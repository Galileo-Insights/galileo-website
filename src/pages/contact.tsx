import React, { FunctionComponent, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import styled from 'styled-components';

import {
  Layout,
  PageContainer,
  Seo,
  Row,
  Column,
  Button,
  Heading,
  Input,
  Section,
  SectionInner,
  Map,
  FlexContainer,
} from '@components';
import postFormUrlEncoded from '@utils/postFormUrlEncoded';
import { requiredEmail, requiredField } from '@utils/validations';
import { baseBorderStyle } from '@styles/mixins';
import galileo from '@images/galileo.png';
import ScrollAnimation from 'react-animate-on-scroll';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

type ContactProps = unknown;

const ContactFormWrapper = styled.div`
  background: rgba(0, 0, 0, 0.8);
  margin: ${(props) => props.theme.sizes.doubleSpacer} 0;
  padding: ${(props) => props.theme.sizes.doubleSpacer};
  border: ${baseBorderStyle};
`;

const FirstSectionBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: -${(props) => props.theme.sizes.doubleSpacer};
  bottom: -${(props) => `${props.theme.sizes.baseSpacerUnit * 20}px`};
  background: url(${galileo}) no-repeat right center;
  opacity: 0.5;
`;

const Contact: FunctionComponent<ContactProps> = () => {
  const [sent, setSent] = useState(false);
  const initialValues = {
    email: '',
    firstName: '',
    lastName: '',
    message: '',
  };

  return (
    <Layout>
      <Seo title="Contact Us" />
      <main>
        <br />
        <br />
        <Section background="rgba(61, 117, 100, 0.8)">
          <SectionInner>
            <FirstSectionBackground />
            <PageContainer>
              <Row>
                <Column md={5} mdOffset={1} mdOrder={2}>
                  <ScrollAnimation animateIn="animate__fadeInRight">
                    <Heading>Come Say Hello</Heading>
                  </ScrollAnimation>

                  <ScrollAnimation animateIn="animate__fadeInLeft" delay={300}>
                    <p>
                      Stop by anytime (well, not <em>any</em> time) and see what we are up to.
                    </p>
                    <FlexContainer justifyContent="flex-start">
                      <FaMapMarkerAlt />
                      <address style={{ lineHeight: 1.2, margin: '16px' }}>
                        <a href="https://goo.gl/maps/3NzoGQEcaE8ivsdy6">
                          738 S. Washington Ave. <br />
                          Royal Oak, MI 48067 <br />
                        </a>
                      </address>
                    </FlexContainer>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="animate__fadeInLeft" delay={600}>
                    <FlexContainer justifyContent="flex-start">
                      <FaPhoneAlt />
                      <p style={{ margin: 16 }}>
                        <a href="tel:+13234254536">(323) GALILEO</a>
                      </p>
                    </FlexContainer>
                  </ScrollAnimation>
                </Column>
                <Column md={6} mdOrder={1}>
                  <Map />
                </Column>
              </Row>
            </PageContainer>
          </SectionInner>
        </Section>
        <PageContainer>
          <Row>
            <Column md={8} mdOffset={2}>
              <ContactFormWrapper>
                <Heading>Send us a Message</Heading>

                <Formik
                  validateOnMount
                  initialValues={initialValues}
                  onSubmit={(values, { resetForm, setSubmitting }) => {
                    postFormUrlEncoded('contact', values).then(() => {
                      setSent(true);
                      setSubmitting(false);
                      resetForm();
                    });
                  }}
                >
                  {({ isSubmitting, isValid }) => (
                    <Form
                      name="contact"
                      method="post"
                      netlify-honeypot="bot-field"
                      data-netlify="true"
                    >
                      <input type="hidden" name="form-name" value="contact" />
                      <Row>
                        <Column sm={6}>
                          <Field
                            as={Input}
                            type="text"
                            name="firstName"
                            label="First Name"
                            validate={requiredField}
                            required
                            disabled={sent}
                          />
                        </Column>
                        <Column sm={6}>
                          <Field
                            as={Input}
                            type="text"
                            name="lastName"
                            label="Last Name"
                            validate={requiredField}
                            required
                            disabled={sent}
                          />
                        </Column>
                      </Row>
                      <Field
                        as={Input}
                        type="email"
                        name="email"
                        label="Email"
                        validate={requiredEmail}
                        required
                        disabled={sent}
                      />

                      <Field
                        as={Input}
                        type="textarea"
                        name="message"
                        label="Message"
                        validate={requiredField}
                        required
                        disabled={sent}
                      />
                      {sent ? (
                        <Heading as="h2">Thanks, we will get back to ya soon!</Heading>
                      ) : (
                        <Button type="submit" disabled={isSubmitting || !isValid || sent}>
                          Submit
                        </Button>
                      )}
                    </Form>
                  )}
                </Formik>
              </ContactFormWrapper>
            </Column>
          </Row>
        </PageContainer>
      </main>
    </Layout>
  );
};

export default Contact;
