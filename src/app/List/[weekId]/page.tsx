import React from 'react';
import Layout from '@/components/Layout';
import TimesheetEditor from '@/components/TimesheetEditor';

export const dynamic = 'force-dynamic';
type PageProps = {
  params: {
    weekId: string;
  };
};

export default function TimesheetPage({ params }: PageProps) {

  return (
    <Layout>
        <TimesheetEditor />
    </Layout>
  );
}
