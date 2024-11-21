// var n=2;
// function square(num){
//     var ans = num *num;
//     return ans;
// }
// let res = square(n)
// console.log(res);

// let arr1 = "hellow welcome"
// let arr2=[]
// for(let i=0;i<arr1.length;i++){
//     // console.log(arr1[i]);
//     if(arr1[i]!=" " && arr1[i]!="o"){
//         arr2.push(arr1[i])
//     }
// }
// console.log(arr2);

// let name="Rohit kumre"

// for(let i=0;i<name.length;i++){
//     if(name[i]!="R"){
//         console.log(name[i]);
//     }
// }

// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x()

// function fun(){
//     let val=8;
//     function first(){
//         console.log(val);
//     }
//     return first;
// }
// let res =fun()
// console.log(res);

let emoji =  document.getElementById("emoji")
let num=0

for(let i=1;i<5;i++){
        // console.log("❤️");
        let div = document.createElement("p")
        div.innerHTML = `<h1> 🥰Mom❤️Dad🥰</h1>`
        div.className="img1"
        emoji.append(div)
}

