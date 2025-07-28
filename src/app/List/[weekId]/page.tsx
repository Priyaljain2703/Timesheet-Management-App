import React from 'react';
import Layout from '@/components/Layout';
import TimesheetEditor from '@/components/TimesheetEditor';

export default function TimesheetPage({ params }: { params: { weekId: string } }) {
  return (
    <Layout>
      <TimesheetEditor />
    </Layout>
  );
}
