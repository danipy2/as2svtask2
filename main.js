const arr = ["learn js"];
const  cond  = [0,0]

function addToList(){
    let val = document.getElementById("val")
    let newvalue = val.value.trim()
    
    if( cond[0] == 1){
        arr[cond[1]] = newvalue;
        cond[0] = 0
        let btn = document.getElementById("btn1")
        btn.innerHTML = "Add"
        let val = document.getElementById("val")
        val.value = ""


    }
    else{
        
        if (newvalue != "")
        {
            arr.push(newvalue)
            val.value = ""
        }
    }
    showarr()
    console.log(arr)
}

function deleteTask(ind){
 arr.splice(ind,1)
 showarr()
}
function editTask(ind){
    cond[0] = 1
    cond[1] = ind
    let val = document.getElementById("val")
    let btn = document.getElementById("btn1")
    val.value = arr[ind];
    btn.innerHTML = "Edit"
    showarr()
}
function showarr(){
    let show = document.getElementById("showtask")
    show.innerHTML = `
    ${arr.map((val,ind)=>`<div class = "row" >  ${ind+1}.${val} <div class ="editdelete"> <button class=${"edit"}keyy= ${ind} onclick=editTask(${ind})> Edit </button> <button key= ${ind} class=${"delete"} onclick=deleteTask(${ind})> delete</button></div></div>`).join("")}`
}
showarr()

