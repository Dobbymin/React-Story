const userNameData = ['min', 'dobby'];

// const firstName = userNameData[0];
// const lastName = userNameData[1];

const [firstName, lastName] = ['min', 'dobby'];

console.log(firstName, lastName);

// const user = {
//     name: 'dobby',
//     age: 26,
// };

// const name = user.name;
// const age = user.age;

const { name: userName, age } = {
    name: 'dobby',
    age: 26,
};
