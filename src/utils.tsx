// utils.ts (or utils.tsx if it contains JSX)
export const departmentsData = [
  // Your JSON data from the link provided goes here
  // Replace this placeholder data with the actual JSON data
  {
    id: 1,
    name: 'Department 1',
    subDepartments: [
      { id: 11, name: 'Sub-Department 1.1' },
      { id: 12, name: 'Sub-Department 1.2' },
    ],
  },
  {
    id: 2,
    name: 'Department 2',
    subDepartments: [
      { id: 21, name: 'Sub-Department 2.1' },
      { id: 22, name: 'Sub-Department 2.2' },
    ],
  },
];

// (Optional) If you have functions or other constants in this file, export them too
// export function formatSubDepartment(subDepartment: SubDepartment) {
//   // Implement your formatting logic here
//   return `${subDepartment.id}: ${subDepartment.name}`;
// }
