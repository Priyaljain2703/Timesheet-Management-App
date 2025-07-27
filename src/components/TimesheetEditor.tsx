import DaySection from './DaySection';

const dummyData = {
  'Jan 21': [
    { task: 'Homepage Development', hours: 4, project: 'Project Name' },
    { task: 'Homepage Development', hours: 4, project: 'Project Name' },
  ],
  'Jan 22': [
    { task: 'Homepage Development', hours: 4, project: 'Project Name' },
    { task: 'Homepage Development', hours: 4, project: 'Project Name' },
    { task: 'Homepage Development', hours: 4, project: 'Project Name' },
  ],
  'Jan 23': [
    { task: 'Homepage Development', hours: 4, project: 'Project Name' },
    { task: 'Homepage Development', hours: 4, project: 'Project Name' },
    { task: 'Homepage Development', hours: 4, project: 'Project Name' },
  ],
  'Jan 24': [
    { task: 'Homepage Development', hours: 4, project: 'Project Name' },
    { task: 'Homepage Development', hours: 4, project: 'Project Name' },
    { task: 'Homepage Development', hours: 4, project: 'Project Name' },
  ],
  'Jan 25': [],
};

const TimesheetEditor = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white p-6 rounded-md shadow">
      <div className="relative">
       
        <div className="absolute top-0 right-0 flex items-center space-x-2 group">
          <div className=" absolute top-[-25] right-20 text-sm px-4 py-2 rounded-md text-gray-800  group-hover:opacity-100 transition-opacity ">
            20/40 hrs
          </div>
          <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden mt-3">
            <div className="h-full bg-orange-500 w-1/2"></div>
          </div>
          <div className="text-sm text-gray-500">100%</div>
        </div>

        <div className=""> 
          <h2 className="text-lg font-semibold">This week’s timesheet</h2>
          <div className="text-sm text-gray-500 mb-6">21 - 26 January, 2024</div>

        </div>
      </div>



      {Object.entries(dummyData).map(([day, tasks]) => (
        <DaySection key={day} day={day} tasks={tasks} />
      ))}
    </div>
  );
};

export default TimesheetEditor;
