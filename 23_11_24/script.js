let username = document.getElementById("username")
let adduser = document.getElementById("addUser")
let addUserBtn = adduser.innerText;
let Records = document.getElementById("Records")
let userArr=[];
let objstr = localStorage.getItem('users');
let edit_null = null;
if(objstr!=null){
    userArr = JSON.parse(objstr)
}
DisplayInfo(); 
adduser.onclick = ()=>{
    let user = username.value;
    if(edit_null!=null){
        // edit
       userArr.splice(edit_null,1,{"name":user});
    }
    else{
        // insert
        userArr.push({'name':user})
    }
    // console.log(userArr);
    SaveInfo(userArr);
    username.value = ' ';
    DisplayInfo();
    adduser.innerText = addUserBtn
}
console.log(userArr);

function SaveInfo(userArr){
    let str = JSON.stringify(userArr);
     localStorage.setItem('users',str);
}
function DisplayInfo(){
   let statement ='';
   userArr.forEach((elem,i)=>{
    statement+=`
   <tr>
    <td>${i+1}</td>
    <td>${elem.name}</td>
    <td>
            <i class="fa fa-edit" style="font-size:24px" onclick="EditInfo(${i})"></i>
            <i class="fa fa-trash-o"  onclick="DeleteInfo(${i})"style="font-size:24px;color:red;text-align: center;"></i>
            </td>
   </tr>`
   });
   Records.innerHTML = statement
    
}
function EditInfo(id){
// alert(id)
edit_null = id;
username.value= userArr[edit_null].name;
adduser.innerHTML = 'save change'
}

function DeleteInfo(id){
// alert(id)
userArr.splice(id,1)
SaveInfo(userArr)
// DeleteInfo()
DisplayInfo()
}
