let boxes= document.querySelectorAll(".box");

let reset= document.querySelector(".reset");
let newBtn= document.querySelector("#new");
let msgBox= document.querySelector(".msg-container");
let msg= document.querySelector("#msg");
let turnO= true;
 const winpatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
 ];
 const Resetgame = () =>{
    turnO=true;
    enabledBox();
    msgBox.classList.add("hide");
 };

 boxes.forEach((box) =>{
 box.addEventListener("click",() => {
    console.log("box was clcked");
    if(turnO) {
        box.innerText="0";
          turnO=false;
          
    }
    else {box.innerText="X";
             turnO=true;}
             box.disabled=true;

             checkwinner();

 });
}
 );
  const disabledBox = () => {
  for( let box of boxes) {
    box.disabled=true;
  }
};
const enabledBox = () => {
    for( let box of boxes) {
      box.disabled=false;
      box.innerText="";
    }
  };
 const showWinner = (winner) => {
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgBox.classList.remove("hide");
    disabledBox(); 
}
 
  const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;
        if (pos1val!="" && pos2val!="" && pos3val!="" ) {
            if(pos1val===pos2val&& pos2val===pos3val) {
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
    } 
    }
    newBtn.addEventListener("click",Resetgame);
    reset.addEventListener("click",Resetgame);