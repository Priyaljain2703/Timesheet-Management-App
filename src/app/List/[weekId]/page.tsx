import React from 'react';
import Layout from '@/components/Layout';
import TimesheetEditor from '@/components/TimesheetEditor';

interface TimesheetPageProps {
  params: {
    weekId: string;
  };
}

const TimesheetPage: React.FC<TimesheetPageProps> = ({ params }) => {
  return (
    <Layout>
      <TimesheetEditor />
    </Layout>
  );
};

export default TimesheetPage;
