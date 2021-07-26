console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');
for( let i=0; i<6; i++ ){
  console.log(i);
}//end for
//changed the condition from i<4 to i<6

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');
for(let i=3; i<6; i++ ){
  console.log(i);
}//end for

//Changed the beginning index variable from 0 to 3 so it would start at 3 instead of 0.

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
for( let i=2; i<11; i++ ){
  if( i % 2 === 0 ){
    console.log('The even numbers are', i );
  }//end condition check
}//end for

//I changed the conditions of the for loop and added an if statement to check for even numbers.

// 1.d. (STRETCH) TODO: Write a for loop to do a counddown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
for( let i=5; i>=0; i--){
  console.log(i);
}//end for


// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
for( star of stars ){
  console.log( star );
}//end for


// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
while(stars){
  console.log( 'in the while loop', stars );
  stars++;
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
let index = 0;
let max = 6;
while( index < max ){
  console.log(index);
  index++;
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');

index = 10;
let min = 4;
while( index > min ){
  console.log(index);
  index--;
}
