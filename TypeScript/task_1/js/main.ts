interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any; // ajouter prop type libre
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // propriété additionnelle
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  fullTimeEmployee: true,
  lastName: 'Doe',
  location: 'London',
  numberOfReports: 17
};

console.log(director1);

interface printTeacher {
  (firstName: string, lastName: string): string;
}
const printTeacher: printTeacher = (firstName, lastName) =>
  `${firstName.charAt(0).toUpperCase()}. ${lastName}`;

console.log(printTeacher("John", "Doe"));

