import { NextRequest } from 'next/server';

const taskDataByWeek: Record<string, Record<string, { task: string; hours: number; project: string }[]>> = {
  '1': {
    'Jan 1': [
      { task: 'Homepage Design', hours: 8, project: 'Marketing Website' },
      { task: 'Client Meeting', hours: 4, project: 'Internal' },
    ],
    'Jan 2': [
      { task: 'API Integration', hours: 4, project: 'Analytics Dashboard' },
      { task: 'Bug Fixing', hours: 4, project: 'Analytics Dashboard' },
    ],
    'Jan 3': [
      { task: 'Write Unit Tests', hours: 3, project: 'Mobile App' },
      { task: 'Code Review', hours: 2, project: 'Mobile App' },
      { task: 'Documentation', hours: 5, project: 'Mobile App' },
    ],
    'Jan 4': [
      { task: 'UI Polish', hours: 4, project: 'Admin Panel' },
      { task: 'Team Standup', hours: 5, project: 'Internal' },
      { task: 'Performance Optimization', hours: 3, project: 'Admin Panel' },
    ],
    'Jan 5': [],
  },
  '2': {
    'Jan 8': [
      { task: 'Sprint Planning', hours: 6, project: 'Internal' },
      { task: 'Component Refactor', hours: 7, project: 'Marketing Website' },
    ],
    'Jan 9': [
      { task: 'User Testing', hours: 8, project: 'Mobile App' },
      { task: 'Bug Fixing', hours: 8, project: 'Mobile App' },
    ],
    'Jan 10': [],
    'Jan 11': [
      { task: 'Deployment', hours: 8, project: 'Admin Panel' },
    ],
    'Jan 12': [
      { task: 'Documentation', hours: 5, project: 'Admin Panel' },
    ],
  },
  '3': {
    'Jan 15': [],
    'Jan 16': [],
    'Jan 17': [],
    'Jan 18': [
      { task: 'Planning', hours: 3, project: 'Internal' }
    ],
    'Jan 19': [
      { task: 'Code Cleanup', hours: 2, project: 'Internal' }
    ],
  },
  '4': {
    'Jan 22': [
      { task: 'Frontend Work', hours: 4, project: 'Marketing Website' },
        { task: 'Frontend Work', hours: 5, project: 'Marketing Website' },
    ],
    'Jan 23': [
      { task: 'Backend Work', hours: 4, project: 'Admin Panel' },
        { task: 'Backend Work', hours: 8, project: 'Admin Panel' },
    ],
    'Jan 24': [
      { task: 'Testing', hours: 9, project: 'Admin Panel' },
    ],
    'Jan 25': [
      { task: 'Fix Bugs', hours: 6, project: 'Mobile App' },
    ],
    'Jan 26': [
      { task: 'Review', hours: 6, project: 'Internal' },
    ],
  },
  '5': {
    'Jan 28': [],
    'Jan 29': [],
    'Jan 30': [],
    'Jan 31': [],
    'Feb 1': [],
  },
};

export async function GET(
  req: NextRequest,
  { params }: { params: { weekId: string } }
) {
  const { weekId } = params;
  const data = taskDataByWeek[weekId];

  if (!data) {
    return new Response(JSON.stringify({ error: 'Timesheet data not found' }), {
      status: 404,
    });
  }

  return Response.json(data);
}