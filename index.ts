type todo = string;

let arr : todo[] = ["learn js"];
let  cond  = [0,0]

function addToList():void{
    let val = document.getElementById("val")  as HTMLInputElement
    let newvalue :string = "";
    if( val)
        { newvalue = val.value.trim()}
    
    if( cond[0] == 1){
        arr[cond[1]] = newvalue;
        cond[0] = 0
        let btn = document.getElementById("btn1")
        if (btn)
            btn.innerHTML = "Add"
        let val = document.getElementById("val") as HTMLInputElement
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

function deleteTask(ind:number):void {
 arr.splice(ind,1)
 showarr()
}
function editTask(ind:number):void {
    cond[0] = 1
    cond[1] = ind
    let val = document.getElementById("val") as HTMLInputElement
    let btn = document.getElementById("btn1")
    if (val)
        val.value = arr[ind];
    if (btn)
        btn.innerHTML = "Edit"
    showarr()
}
function showarr(): void{
    let show = document.getElementById("showtask")
    if (show){
        show.innerHTML = `
        ${arr.map((val,ind)=>`<div class = "row" >  ${ind+1}.${val} <div class ="editdelete"> <button class=${"edit"}keyy= ${ind} onclick=editTask(${ind})> Edit </button> <button key= ${ind} class=${"delete"} onclick=deleteTask(${ind})> delete</button></div></div>`).join("")}`
    }
}

showarr()

