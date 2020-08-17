// const obj = {
//     id:1,
//     name,
//     address: {
//         street: 'Kanatna',
//         building: '22',
//     },
// };

// // const {address, id} = obj;

// // const {
// //     address: {street},
// //     id,
// //     name: anotherName = 'h',
// // } = obj;

// // const log = (obj) => {
// //     console.log(anotherName, street, id);
// // };
// const log = ({
//     address: {street},
//     id,
//     name: anotherName = '',
// }) => {
//     console.log(anotherName, street, id);
// };
// log(obj);

// const {id, ...rest} = obj;
// console.log(rest);

const arr = [
    {
        id: 1,
        name,
        address: {
            street: 'Kanatna',
            building: '22',
        },
    },
    {
        id: 2,
        name: 'String2',
        address: {
            street: 'Kanatna',
            building: '24',
        },
    },
];


const emptyObject = {};

[emptyObject.first, emptyObject.second, emptyObject.third] = arr;
console.log(emptyObject);

[arr[0], arr[2]] = [arr[2], arr[0]];
console.log(arr);
