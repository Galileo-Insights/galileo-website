import React, { FunctionComponent } from 'react';

import { Row, Column, Seo, Heading, Button, Layout, PageContainer } from '@components';

// markup
const NotFoundPage: FunctionComponent<Record<string, never>> = () => {
  return (
    <Layout>
      <Seo title="Page Not Found" />
      <main>
        <PageContainer>
          <Row>
            <Column md={8} mdOffset={2}>
              <Heading>Page not found</Heading>
              <p>
                Sorry, we couldn’t find what you were looking for.
                <br />
                <br />
                <Button type="link" to="/">
                  Go home
                </Button>
                .
              </p>
            </Column>
          </Row>
        </PageContainer>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
