import React from 'react';

import { Layout, SEO } from 'components';
import { Schedule } from 'containers';

const SchedulePage = () => (
  <Layout>
    <SEO title='Schedule' />
    <Schedule />
  </Layout>
);

export default SchedulePage;
