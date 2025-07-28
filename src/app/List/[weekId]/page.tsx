import React from 'react';
import Layout from '@/components/Layout';
import TimesheetEditor from '@/components/TimesheetEditor';

export const dynamic = 'force-dynamic';

export default function TimesheetPage() {

  return (
    <Layout>
        <TimesheetEditor />
    </Layout>
  );
}
