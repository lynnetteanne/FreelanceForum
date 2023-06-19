const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
//get element from the DOM
const root = document.getElementById("root")
//add elements
//heading
const h1 = document.createElement("h1");
h1.innerHTML = "FREELANCERS";
root.appendChild(h1);
//unordered list
const userList = document.createElement("ul")

//list items from array
//loop through list of users
for (let i = 0; i < users.length; i++) {
    const listElement = document.createElement("li");
    userList.appendChild(listElement);
    const currentUser = users[i];
    //create a list element with user data, append to ul
    listElement.innerHTML = "Name: " + currentUser.name + " Age: " + currentUser.age + " Occupation: " + currentUser.occupation;
}
root.appendChild(userList);

}

//call the main function
main();