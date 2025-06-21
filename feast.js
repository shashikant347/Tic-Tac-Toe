//hellooooaskjdhfkjahsdff
// /jhhgjhgfjg
let bt =  document.querySelectorAll(".box")


let turnO = true;

 
bt.forEach((box)=> {
   box.addEventListener("click",()=>{
    
    if(turnO){
        box.innerText = "O"
        turnO = false;
    }else {
        box.innerText = 'X'
        turnO = true;
    }
    checkwinner()
   })
})

const wPatterns = [
    [0,1,2]
    [0,3,6]
    [0,4,8]
    [1,4,7]
    [2,5,8]
    [2,4,6]
    [3,4,5]
    [6,7,8]
]

const checkwinner = () =>{
    for(pattern of wPatterns){
        let po1v= bt[pattern[0]].innerText;
        let po2v = bt[pattern[1]].innerText;
        let po3v= bt[pattern[2]].innerText;

        if(po1v != ''&& po2v != ''&& po3v != ''){
            if(po1v == po2v&& po2v== po3v ){
                console.log(`winner ${po2v}`)
            }
        }
    }
}



