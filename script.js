// 1.
let user = {
    firstname:"giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
}

console.log(user.studentstatus);






// 2

let countries = ['Georgia', 'Italy', 'France', 'Spain']
 for (let x=0; x<countries.length; x++){
    console.log(countries[x]);
 }

// or

let countries = ['Georgia', 'Italy', 'France', 'Spain']
for (let y of countries) {
    console.log();
}

// while loop

let countries = ['Georgia', 'Italy', 'France', 'Spain']
    let i=0;
    while (i<countries.length){
        console.log(countries[i]);
        i++
    }




// 3

let numbers= [4,5,6,7,8,]
for (let item of numbers) {
    if (item>5) {
    console.log(item);
    }
}

let numbers = [4,5,6,7,8,]
for (let z=0; z<numbers.length; z++){
    console.log(numbers[z]);
    if (numbers[z]>5) {
        console.log(numbers[z]);
    }
}




// 4

let user = {
    name: 'giorgi',
    age:  20,
    studentstatus: 'active'
}

    if (user.age < 18 && user.studentstatus == 'active'){
        console.log("hello");
    } else if (
        user.name == 'levani') {
        console.log('hello levani');
    } else if (
        user.studentstatus == 'active' || user.age < 25){
        console.log('hello world');
    } else {console.log('error');}






// 5
let array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ];
    for ( let item of array){
        if (typeof item == 'string'){
            console.log(item);
        }
    }





// 6

let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]
for (let x of array ) {
    for (let z of x) {
        if (z > 0) {
            console.log(z);
        }
    }
}

// OR

let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]
for (let z=0; z<array.length; z++){
    for (let a=0; a<array[z].length; a++){
        if (array[z][a]>0) {
            console.log(array[z][a]);
        }
    }
}




// 7

let array = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
for (let items of array){
    if (items % 2 == 0) {
        console.log(items);
    }
}

let array = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
for (let items of array){
    if (items % 2 == 1) {
        console.log(items);
    }
}





// 8
let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]

for (let x of users) {
    if (x.status == true) {
        console.log(x.username);
    }
}