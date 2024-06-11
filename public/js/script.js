const btn = document.getElementById('btn');
btn.onclick = function () {

    const name = prompt('Enter your full name');
    document.getElementById('name').innerText = name;
}

// variables
const pie = 3.142;
let username = 'Jack Toronto';
let age = 87;
let present = false;

// objects
const person = {
    username: 'Jack Toronto',
    age: 101,
    present: false,
    child: {
        name: 'Don',
        friend: {
            name: 'Carlo',
        }

    }
}

console.log(person.username);
person.age = 55;
console.log(person);


//Arrays
const bottle1 = {
    size: 'large',
     color: 'yellow'
  }
  
  const bottle2 = {
    size:'small',
    color: 'blue'
    
  }
  const cat1 = {
    weight: 20,
    breed: 'tabby'
  }
  
  const bottles = [bottle1, bottle2, cat1];
  bottles.push(bottle1);
  bottles.push(bottle2);
  bottles; 
  bottles[1].size;
  
  const date = new Date();
  date.getDay()
  //ifelse
//   const age = 18;
  if(age >= 18){
    'You are true';
  } else{
    'You are false';
  }
  
  // For loop
  
  for (let i = 0; i<=5; i++) {
    console.log ('We did it!', i);
  }
  


  //Functions
//Defining a function
function login(username, password) {
  //validate username and password
  if(!username || !password) {
    return 'Username or password not provided';
  }
  
  //verify username and password
  if(username == 'Jack_Toronto' && password == '1234'){
    return 'user is logged in';
  } else {
    return 'Invalid username or passwprd';
  }
}
//Invoking a function
login('Jack_Toronto')



//Basic Arithmetic Operations

11 + 12;
1 + 0.5;
43 - 12;
45 / 5;
5 * 3;
14 % 3;

math.floor(45/24);
45%24
math.random() * 1000;
math.max (34, 32, 37);
2 * (3 + 4) - 5 / 2;




// strings in Javscript
// concatenation

const firstname = 'Jack';
const lastname = 'Toronto';
const middlename = '';
firstname  + ' ' + lastname;

//Template Literal
`${firstname} ${middlename} ${lastname}`;


//String Methods

let fullName = "Jack Toronto";
fullName.length;


let last_name = "Toronto Mate";
last_name.toUpperCase();
last_name.toLowerCase();
last_name.charAt(4);
last_name.slice(4,8);
last_name.split("");
last_name.replace("Mate", "Jack");
last_name.indexOf('on');

// String Conversion

parseInt("3.243")
parseFloat("3.243")

let amount = 18000
console.log(`GHS${amount}`)
amount.toString()



//write a function that will add a participant to our google classroom
      
         
const participants = [];         
function addParticipant(email) {
  // check if email was provided
  if (!email){
    return "No email provided";
  }
  // check if email is valid
  if (!email.includes('@')) {
    return 'Invalid email provided';
  }
  // Add email to participants
  participants.push(email);
return 'Participant added';
 }
addParticipant('jacktoronto@gamil.com');
addParticipant('jacktoronto@gamil.com');
addParticipant();
addParticipant('Jack')
participants;



// Arrays in JavaScript
const users = [
  {
    username: 'jacktoronto',
    password: '1234',
    email: 'jacktoronto@gmail.com'
  },
    {
    username: 'jack',
    password: '1234',
    email: 'jacktoronto@gmail.com'
  },
];





// Write a function that will take a user with firstname, lastname and return fullname;

// function addDetails( firstname, lastname){
//   if (firstname & lastname !== null) {
//     return "Type in your First Name and Last Name";
// } else {
//   return firstname + " " + lastname;
// }
// }
//  addDetails(); 



function fullName(user) {
  return {
    ...user,
    fullName: `${user.firstname} ${user.lastname}`
  };
  // return user.firstname + ' ' + user.lastname;
}

const user = {
  firstname: 'Jack',
  lastname: 'Toronto'
}
fullName(user);


















// Array map

const users = [
  {firstname: 'Jack', lastname: 'Toronto'},
  {firstname: 'Big', lastname:'Jerry'},
  {firstname: 'Cristopher' , lastname: 'Katonga'},
  {firstname: 'Jack', lastname: 'Toronto'},
  {firstname: 'Jack', lastname: 'Toronto'},
  
]
// users.map(fullName);


// square of numbers
function square(number) {
  return number ** 2;
}
square(5);

const numbers = [9, 8, 7, 6];
numbers.map(square);


// Array filter

function isEven(number){
  return number % 2 == 0;
}
isEven(6);
numbers.filter(isEven);

