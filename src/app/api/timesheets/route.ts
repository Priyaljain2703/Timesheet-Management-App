

export async function GET() {
  const statusSheet = [
    { week: 1, date: '1 - 5 January, 2024', status: 'COMPLETED', action: 'View' },
    { week: 2, date: '8 - 12 January, 2024', status: 'COMPLETED', action: 'View' },
    { week: 3, date: '15 - 19 January, 2024', status: 'INCOMPLETE', action: 'Update' },
    { week: 4, date: '22 - 26 January, 2024', status: 'COMPLETED', action: 'View' },
    { week: 5, date: '28 January - 1 February, 2024', status: 'MISSING', action: 'Create' },
  ];

  return Response.json(statusSheet);
}
 