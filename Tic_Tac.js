let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#game"); 
let newGame=document.querySelector("#new-game");
let Container=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
const winpartten=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
];
const resetgame=()=>{
    turnO=true;
    enableBox();
    Container.classList.add("hide");
};
const disabledbox=()=>{
    for(let i of boxes){
        i.disabled=true;
    }
};
const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
boxes.forEach((val)=>{
    val.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turnO){
            val.innerText="O";
            turnO =false;
        }
        else{
            val.innerText="X";
            turnO=true;
        }
        val.disabled=true;
        winner();
    });
});
const showwinner=(winner1)=>{
    //console.log(winner1);
    msg.innerText=`Congratulations Winner is  '${winner1}'`;
    Container.classList.remove("hide");
    disabledbox();
};
const winner=()=>{
    for(let i of winpartten){
        console.log(i[0],i[1],i[2]);
        let value1=boxes[i[0]].innerText;
        let value2=boxes[i[1]].innerText;
        let value3=boxes[i[2]].innerText;
        if(value1!="" && value2!="" && value3!=""){
            if(value1===value2 && value2===value3){
                showwinner(value1);
            }
        }
    }
};


newGame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);


