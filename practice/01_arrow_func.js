// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );

// convert it into arrow function

let ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => {
    alert("You Agreed?")
  },
  () => {
    alert("You canceled the execution.)")
  }
)

// extra practice
// convert the follwing into arrow functions

function hello() {
  console.log("Hello");
}

let hello = () => {
  console.log("Hello")
}

function double(n) {
  return n * 2;
}

let double = (n) => {
  n * 2;
}

setTimeout(function () {
  console.log("Finished");
}, 1000);

setTimeout(() => {
  console.log("Finished")
}, 1000);

const nums = [1, 2, 3];

nums.forEach(function (num) {
  console.log(num);
});

nums.forEach((num) => {
  console.log(num)
})

const result = nums.map(function (num) {
  return num * num;
});

let result_ = nums.map((nums) => {
  num * num;
})
