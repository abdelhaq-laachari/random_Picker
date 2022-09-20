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
  "Mehdi",
];

let selectedUsers = [];

function getRandomNumber(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let step3 = Math.floor(step2);

  return step3;
}


btnRandom.addEventListener("click", () => {
  let index = getRandomNumber(0, users.length - 1);
  result.innerText = users[index];
  console.log(index);

  removeStudent(index);
  console.log(users.length);
});

function removeStudent(student) {
  users.splice(users.indexOf(student), 1);
}

function studentResult(){
    
}