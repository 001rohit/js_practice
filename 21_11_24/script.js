let box  = document.getElementById("wrapper")

function myFirst(){
    for(let i=1;i<=20;i++){
            let div = document.createElement("p")
            div.className='val'
            div.innerHTML = `${i} = ${i*i}`
            box.append(div)
    }
}
myFirst()