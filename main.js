inputarea = document.getElementById("input-area");
clickbutton= document.getElementById("click-button");

maincontent=document.querySelectorAll(".content div")

clickbutton.addEventListener("click",mainbutton);
let mode="";
let list=[];

maincontent.addEventListener("click",function(event){Mbutton(event)})

function Mbutton(event){
    console.log("클릭됨")
}

function mainbutton(){
    let comming="";
    comming ={
        content:inputarea.value,
        iscomplete:false,
        id:generRandomNumber(),
    };
    list.push(comming)
    console.log(list)
    render()

}
function render(){
    let resultHtml='';
    for(let i=0; i<list.length; i++){
        resultHtml += ` <div id="text" >
        <div>
            ${list[i].content}
        </div>
        <div>
            <button onclick="complete('${list[i].id}')">완료!</button>
            <button onclick="DeleteButton('${list[i].id}')">삭제!</button>
        </div>
    </div>`
    }

    document.getElementById("maintext").innerHTML=resultHtml;
}


function complete(id){
    for(let i =0;i<list.length;i++){
        if(list[i].id==id){
        list[i].iscomplete = !list[i].iscomplete
        break;
        }
    }
    console.log(list)
}


function DeleteButton(id){
    for(let i=0; i<list.length;i++){
        if(list[i].id==id){
            list.splice(i,1)
            break;
        }
    }
    console.log(list)
    render()

}


function generRandomNumber(){
    return "_" + Math.random().toString(36).substr(2, 9);
}


