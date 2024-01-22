// export default function () {
//     console.log('hello');
// }

// export default (userName, message) => {
//     console.log('hello');

//     return userName + message;
// };

const user = {
    name: 'dobby',
    age: 26,
    greet() {
        console.log('hi?');
        console.log(this.age);
    },
};

console.log(user);
console.log(user.name, user.age);

user.greet();
