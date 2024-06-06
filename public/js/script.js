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
  