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

