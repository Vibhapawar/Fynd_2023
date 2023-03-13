const arr = ['giraffe','tiger','lion'];//Homogeneous data
const arr2 = [1,2,3,4];//Homogeneous data\
arr.push('cheetah');//adding elemet to an array using push function
arr2.push(6);
arr.forEach(element=>{
    console.log(element);
});

arr2.forEach(element=>{
    console.log(element);
});

const fruits = ['banana','orange'];
fruits.unshift('apple');//add element in the beginning of the array
console.log(findFruit("banana"));
//fruits.findIndex(findFruit('apple'));

fruits.findIndex(findFruit);

function findFruit(fruit){
    return fruit == "banana";
}

const ages = [6,2,3,4];
ages.findIndex(checkAge);
ages.sort();//ascending
ages.reverse();//descending after asc in the previous line

function checkAge(age){
    return age>3;
}

const cars = ["bmw","mercedes"];

const car = {type:"fiat",model:"400",color:"white"};//name value pairs
//use this while matching the data to the documents of mongo