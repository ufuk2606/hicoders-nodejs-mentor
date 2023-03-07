import shortUUID from "short-uuid";
let users = [
  { id: "1", name: "John", surname: "Smith", country: "USA", salary: 6000 },
  { id: "2", name: "Emma", surname: "Wilson", country: "UK", salary: 5500 },
  {
    id: "3",
    name: "Hans",
    surname: "Müller",
    country: "Germany",
    salary: 7000,
  },
];

const getUsersList = () => {
  return users;
};

const getHighestSalary = () => {
  const highestSalary = users.sort((a, b) => b.salary - a.salary);
  return highestSalary[0];
};

const getLowestSalary = () => {
  const lowestSalary = users.sort((a, b) => a.salary - b.salary);
  return lowestSalary[0];
};

const getSelectedCountry = (pCountry) => {
  const newArray = pCountry.split("");
  const selectedWord = newArray.slice(8).join("");
  const selectedCountry = users.filter(
    (person) => person.country == selectedWord
  );
  if (selectedCountry.length !== 0) {
    return selectedCountry;
  } else {
    return `No Person found from ${selectedWord}`;
  }
};

const addUsers = (pUser) => {
  const newUser = {
    id: shortUUID.generate(),
    name: pUser.name,
    surname: pUser.surname,
    country: pUser.country,
    salary: pUser.salary,
  };
  users.push(newUser);
  return newUser;
};

export {
  getUsersList,
  getHighestSalary,
  getLowestSalary,
  getSelectedCountry,
  addUsers,
};
