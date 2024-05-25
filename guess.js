
let rand=(Math.floor(Math.random()*100 +1));


const submit=document.querySelector('.button')
const input=document.querySelector('#guess')
const prev=document.querySelector('.guesses')
const rem=document.querySelector('.remaining')
const loworhi=document.querySelector('.loworhi')
const startover=document.querySelector('.afterguess')

const p=document.createElement('p')

let prevguess=[];
let numguess=1;
let playgame=true;

if(playgame){
    submit.addEventListener('click',function(event){
        event.preventDefault()
        const guess=parseInt(input.value)
        console.log(guess);
        validateguess(guess)
    })
}

function validateguess(guess){
//validate whether the guessde value is bw 1 to 100 
if(isNaN(guess)){
    alert('please enter a valid number')
}
else if(guess<1){
    alert('please enter a valid number(grater than 1)')
}
else if(guess>100){
    alert('please enter a valid number(smalller than 100)')
}
else{
prevguess.push(guess) //if able to play the change the prevguess array..
if(numguess===11){
    displayguess(guess)
    displaymessage(`game over. the number is ${rand}`)
    endgame()
}
else{
    displayguess(guess)
    checkguess(guess)    
}
}
}

function checkguess(guess){
//checking whether the entered value is equal to he random number
if(guess===rand){
displaymessage(`you guessed it right`)
endgame()
}
else if(guess<rand){
    displaymessage('Number is TOO low')
}
else if(guess>rand){
    displaymessage('Number is TOO high')
}
}


function displayguess(guess){
//it will clen the value of guess for next value and dispaly numof guesses nd prev guesses.
input.value='' //cleaning up the input after every guess
prev.innerHTML+=` ${guess}`
numguess++;
rem.innerHTML=`${11-numguess}`
}


function displaymessage(message){
    //printing messages according to the guessed no.
    loworhi.innerHTML=`<h2>${message}</h2>`
}


function endgame(){
input.value=''
input.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML= `<span class="newbut" id="newgamebutton">start new game</span>`;
startover.appendChild(p)
playgame=false;
newgame()
}

function newgame(){
const newgamebutton=document.querySelector('.newbut')
newgamebutton.addEventListener('click',function(event){
    rand=(Math.round(Math.random()*100 +1));
    prevguess=[]
    numguess=1
    prev.innerHTML=''
    rem.innerHTML=`${11-numguess}`
    input.removeAttribute('disabled')
    startover.removeChild(p);
    loworhi.innerHTML=''
    playgame=true
})
}

