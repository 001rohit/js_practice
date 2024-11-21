let box  = document.getElementById("wrapper")
let btn = document.getElementsByTagName("button")
let showRes = document.getElementById(" showRes")
var res1 = []  
var res2 = []  
var ans1 = 0
function myFirst(){
    for(let i=1;i<=20;i++){
        for(let j=1;j<=10;j++){
            let div = document.createElement("p")
            div.className='val'
                div.innerHTML = `
                <h2>${i} * ${j} <span className="showRes"></span> </h2> &nbsp; &nbsp;<button>show</button>
                `
                
                res1 = i*j
                ans1 = i*j
                box.append(div)
                res2.push(ans1)
            }
        }
        myFun()
    }
    myFirst()
    
    // console.log(res2.indexOf(2));
    // console.log(res2[2]);
    // for(let i=0;i<res2.length;i++){
    //     console.log(res2[i]);
    // }

res2.map((e,i)=>{
    console.log(i,e);
})
function myFun(){
        for(let i=0;i<btn.length;i++){
        btn[i].addEventListener("click",()=>{
          console.log("hellow welcome");
          if(btn[i].innerText=="show"){
            btn[i].innerHTML = `hide (ans:${res2[i]})`
            alert(`Result : ${res2[i]}`)
        }
        else if(btn[i].innerText==`hide (ans:${res2[i]})`){
            btn[i].innerHTML = "show"
          }    
          console.log(i*j);
        })
      }
      
}