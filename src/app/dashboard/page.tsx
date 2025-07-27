'use client';

import React from 'react';
import Layout from '@/components/Layout';
import TimesheetTable from '@/components/TimesheetTable';

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-200 p-4 sm:p-8">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-semibold mb-6">Your Timesheets</h1>
          <TimesheetTable />
        </div>
         <div className=" mt-5 text-center text-sm text-gray-500 py-6 bg-white max-w-6xl mx-auto  rounded-lg shadow-sm p-6">
        © 2024 ticktock. All rights reserved.
      </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
