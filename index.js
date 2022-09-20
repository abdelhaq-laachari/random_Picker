let btnRandom = document.querySelector("button");
let result = document.querySelector("h2");

let users = [
  "Marks",
  "Kamal",
  "Abdelhaq",
  "Marouan",
  "Amine",
  "Mehdi",
  "Mohammed",
  "Ahmed",
];

document.getElementById("allStudents").innerHTML = users;

let selectedUsers = [];

function getRandomUsers(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let step3 = Math.floor(step2);

  return step3;
}

btnRandom.addEventListener("click", () => {

  console.log(users);

  let index = getRandomUsers(0, users.length - 1);
  result.innerText = users[index];

  selectedUsers.push(users[index]);

  console.log(users[index]);

  users.splice(users.indexOf(users[index]), 1);

  console.log(selectedUsers);
});


document.getElementById("rStudents").innerHTML = selectedUsers;
