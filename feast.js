


let boxes = document.querySelectorAll('.box')

let resetbtn = document.querySelector('#resetbutton')
let winner = document.querySelector('#winner')

let turnO = true;


let arr = [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];


const reset = ()=>{
turnO = true;
enableBos()
winner.innerText = ''


}






boxes.forEach((box)=> {
box.addEventListener("click",()=>{

if(turnO){
    box.innerText = "O"
    turnO = false;
}else {
    box.innerText = 'X'
    turnO = true;
}
box.disabled = true;
checkwinner()
})
})

const disablBos = ()=>{
    for(bx of boxes){
        bx.disabled = true;
    }
}


const enableBos = ()=>{
    for(bx of boxes){
        bx.disabled = false;
        bx.innerText= "";
    }
}


const showWinner =(win)=>{
winner.innerText = `winner is ${win}`
disablBos()
}

const checkwinner= () =>{

for( let ar of arr){

let  po1v = boxes[ar[0]].innerText
let  po2v =  boxes[ar[1]].innerText
let  po3v = boxes[ar[2]].innerText
if( po1v != '' && po2v != '' && po3v!= ''){
if(po1v=== po2v&& po2v ==po3v){
showWinner(po1v);
}
}
}
}
resetbtn.addEventListener('click',reset)







