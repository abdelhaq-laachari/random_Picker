let btnRandom = document.querySelector("button");
// let result = document.querySelector("h2");

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
  let index = getRandomUsers(0, users.length - 1);
//   result.innerText = users[index];

  if(users.length > 0){
    selectedUsers.push(users[index]);
  }

  console.log(users[index]);

  if (users.length > 0) {
    let newUsers = users.splice(users.indexOf(users[index]), 1);

    console.log(users);
    document.getElementById("allStudents").innerHTML = users;
    console.log(selectedUsers);
  }else if(users.length <= 0) {
    let message = "no student left"
    document.getElementById("allStudents").innerHTML = message;
  }
  document.getElementById("rStudents").innerHTML = selectedUsers;
});


