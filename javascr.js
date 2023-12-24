let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newgamebtn=document.querySelector(".new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");


let turn0=true;// playerx ,playery
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame=()=>{
    turn0=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        count++;
       console.log("jay shri ram");
       if(turn0){
        //player0
        box.innerText="0";
        box.classList.add("box-1");
        turn0=false;
       }
       else{
        //player1
        box.classList.remove("box-1");
        box.innerText="x";
       
        turn0=true;
       }
       box.disabled=true;
       cheackwinner();
    
    });

});
const showwinner=(winner)=>{
    msg.innerText=`congratulations,winner is${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}
const cheackwinner=()=>{
    for( let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
         if (count===9) {
            msgcontainer.classList.remove("hide");
            msg.innerText=`congratulations,both Game is drawn jay shri ram`;
              
             
              disableBoxes();
              count=0;
             
      }
          
     if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
        if(pos1Val===pos2Val&&pos2Val===pos3Val){
           
           console.log("winner",pos1Val);
           showwinner(pos1Val);
        }
        
     
      
    }
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

}
}
