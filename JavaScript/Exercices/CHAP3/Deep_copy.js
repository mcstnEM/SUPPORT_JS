const students = [
    {
      name: "Alan",
      family: {
        mother: "Yvette",
        father: "Michel",
        sister: "Elise",
      },
      age: 35,
    },
    {
      name: "Bernard",
      family: {
        mother: "Martine",
        father: "Cécile",
        sister: "Sophie",
      },
      age: 55,
    },
];

// Version Destructuring

const studentsCopy = students.map(student => ({
  ...student,
  family: { ...student.family }, // Copie profonde de l'objet family
}));
  
// Version Recursive

const deepCopyRecursive = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  let copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopyObject(obj[key]);
    }
  }

  return copy;
};

// Version JSON.parse() JSON.stringify()

const deepCopyJSONMethods = (obj) => {
  const copy = JSON.stringify(obj);
  return JSON.parse(copy);
}

// Version structuredClone()

const deepCopyStructuredClone = (obj) => structuredClone(obj)