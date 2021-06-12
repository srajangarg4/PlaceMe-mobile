const numberOfSemesters = 8;

const documentType = [
  {
    text: 'Secondary Marksheet',
    value: 'Secondary',
  },
  {
    text: 'Senior Secondary Marksheet',
    value: 'SeniorSecondary',
  },
  ...[...Array(numberOfSemesters)].map((_, index) => ({
    text: `Graduation ${index + 1} Marksheet`,
    value: `Graduation${index + 1}Marksheet`,
  })),
];

export default documentType;
