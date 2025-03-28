
const users =[
    {id: 1, name: 'Prasad', age: 23},
    {id: 2, name: 'Chirag', age: 22},
    {id: 3, name: 'Chanchal', age: 21},
    {id: 4, name: 'Abhishek', age: 22},
    {id: 5, name: 'Prarabhdha', age: 22},
    {id: 6, name: 'Raviraj', age: 22},
    {id: 7, name: 'Yashodeep', age: 22},
    {id: 8, name: 'Simran', age: 22},
    {id: 9, name: 'Vinayak', age: 21}
];

const all = document.querySelector(".all");
users.forEach((user) => {
    const demo = document.createElement("div");
    demo.classList.add("demo");
    demo.innerHTML = `
    <h2>${user.name}</h2>
    <p>${user.age}</p>`;

    all.appendChild(demo);
});