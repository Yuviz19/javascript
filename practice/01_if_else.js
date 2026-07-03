let message;

login = "Director";

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

// convert the following with ? operator

let message_two = (login == "Employee") ? "Hello" :
  (login == "Director") ? "Greetings" :
    (login == "") ? "No login" : "";

console.log(message);
console.log(message_two);
