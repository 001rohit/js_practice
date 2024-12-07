arr = [2,3,4,5,6]
// arr = "abc"

// let b=Array.isArray(arr)
// console.log(b);


// if(Array.isArray(arr)==true){
//     console.log("This is an array");
// }
// else{
//     console.log("This is not an array");
// }

var userName = ["rohit","aman","ankit","rohit","manish","rahul"]

// var fndIndex = userName.indexOf('rohit')
// var lstIndex = userName.lastIndexOf('rohit')
// var lstIndex1 = userName.indexOf('rohit',1)
// console.log(lstIndex1);

// sort()
// reverse()
// pop()
// push()
// shift()
// unshift()
// concat()
// join()
// slice()
// splice()
// isArray()
// indexOf()
// entries()
// every()
// filter()
// find()
// findIndex()
// includes()
// some()
// forEach()
// toString()
// valueOf()
// fill()

var user_Name = ["rohit","aman","ankit","rohit","manish","rahul"]

// 1.type sort()
// let  name_sort = user_Name.sort()
// console.log(name_sort);


// 2.type reverse()
let name_array_reverse =user_Name.reverse()
console.log(name_array_reverse);

// 3.type pop()
// let remove_name = user_Name.pop()
// console.log(remove_name);

// 4. type push()
// let add_name = user_Name.push("seru")
// console.log(user_Name);
// console.log(add_name)/;

// console.log(user_Name);

// 5. type shift()
// let shift_name = user_Name.shift()
// console.log(user_Name);
// console.log(shift_name);

// 6. type  unshift()

// let unshift_name = user_Name.unshift("anand")
// console.log(user_Name);


// 7. type concat()
// let value_concate = user_Name.concat(arr)
// console.log(value_concate);


// 8. type join()
// let join_value  = user_Name.join(" [🫡] ")
// console.log(join_value);

// 9. type slice() => slice(starting index,end index)
// let slice_name = user_Name.slice(1,5)
// console.log(slice_name);

// 10.type splice() => splice(start,which value store or add)
// let splice_name = user_Name.splice(1,2)
// console.log(splice_name);

// 11.type isArray()
let find_Arr = Array.isArray(user_Name)
console.log(find_Arr);

// 12.type indexOf()
// let find_firstIndex = user_Name.indexOf("rohit")
// console.log(find_firstIndex);

// 13. type lastIndexOf()
// let lst_Index  =  user_Name.lastIndexOf("rohit")
// console.log(lst_Index);

// 14.type find()

// let find_name = user_Name.find()
// console.log(find_name);

// higher order function

var ages = [10,18,25,30]
let check_adult = 27

function checkAdult(age){
    return age>=check_adult
}

let res = ages.find(checkAdult)
console.log(res);
// 15.type findIndex()
let res1 = ages.findIndex(checkAdult)
console.log(res1);


// 16. type filter()

function find_adultAge1(ages){
    return ages>=18
}
var ages = [10,18,25,30,19,15]
let show_res1 = ages.filter(find_adultAge1)
console.log(show_res1);

// 17. type toString()
var user_Name1 = ["rohit","aman","ankit","rohit","manish","rahul"]
user_Name1.toString()
// let res_1 = user_Name1.toString()
// console.log(res_1);
console.log(typeof(user_Name1));
// console.log(typeof(res_1));

// 18.type valueOf()

// let res3 = user_Name1.valueOf()
// console.log(res3);

// 19.type fill()

let show_same_name = user_Name1.fill("😍Rohit😍")
console.log(show_same_name);





 
