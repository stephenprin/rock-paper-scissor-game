
const UserRandomImage={
    "paper":"assets/Paper.png",
    "rock":"assets/Rock.png",
    "scissor":"assets/Scissors.png"
}
let SCORE=0;
let restart;
const userPicked=(hand)=>{
    
    const hands=document.querySelector(".hands");
    hands.style.display="none"
    const compare=document.querySelector('.compare');
    compare.style.display="flex"

  document.getElementById("userPickedOption").src=UserRandomImage[hand]
  let randPick=computerPicked()
  refree(hand, randPick)
  
}

const computerPicked=()=>{
    let hands=["paper","rock","scissor"]
    let randPick=hands[Math.floor(Math.random()*3)]
    document.getElementById("computerPickedOption").src=UserRandomImage[randPick]
    return randPick;
    

    
}


const refree=(userhand, computerhand)=>{
    if(userhand=="paper" && computerhand=="paper"){
        setResult("IT'S TIE")
    }
    if(userhand=="paper" && computerhand=="scissor"){
        setResult("YOU WON")
        setScore(SCORE+1)
    }
    if(userhand=="paper" && computerhand=="rock"){
        setResult("YOU LOOSE")
    }
    if(userhand=="rock" && computerhand=="paper"){
        setResult("YOU LOOSE")
    }
    if(userhand=="rock" && computerhand=="scissor"){
        setResult("YOU WON");
        setScore(SCORE+1);
    }
    if(userhand=="rock" && computerhand=="rock"){
        setResult("IT'S TIE")
    }
    if(userhand=="scissor" && computerhand=="paper"){
        setResult("YOU WIN")
        setScore(SCORE+1)
    }
    if(userhand=="scissor" && computerhand=="rock"){
        setResult("YOU WiN");
        setScore(SCORE+1);

    }
    if(userhand=="scissor" && computerhand=="scissor"){
        setResult("IT'S TIE");
    }

}

const setResult=(result)=>{
    document.querySelector(".result h1").innerHTML=result;
}
const setScore=(score)=>{
    SCORE=score;
    document.querySelector(".score h1").innerHTML=score;
}
const rePlay=()=>{
    const hands=document.querySelector(".hands");
    hands.style.display="flex";
    const compare=document.querySelector('.compare');
    compare.style.display="none"
}
const reStart=(restart)=>{
    restart=0;
    document.querySelector(".score h1").innerHTML=restart;
}