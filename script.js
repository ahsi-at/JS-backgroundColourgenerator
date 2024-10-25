const Generatebtn = document.getElementById("Generatebtn");

function colorButton(){
    const randomColor = `#` + Math.floor(Math.random()*77215).toString(16);
    document.body.style.backgroundColor = randomColor;
    console.log(randomColor);

}


colorButton()

Generatebtn.addEventListener("click", colorButton);




//  ! generate a random pastel colour


const pastelbtn = document.getElementById("pastelbtn"); /* access button*/

function pastelcolorButton(){
    const r = Math.floor((Math.random() * 127) + 127);
    // const r = Math.floor((Math.random() * 17) + 127);
    const g = Math.floor((Math.random() * 127) + 127);
    const b = Math.floor((Math.random() * 127) + 127);
    const pastelrandomColor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = pastelrandomColor;
    console.log(pastelrandomColor);
   

}
pastelcolorButton()

pastelbtn.addEventListener("click", pastelcolorButton);


// ! display colour value on screen

const colourvalue = document.getElementById("colourvalue");

function displayValue(){
    let value = randomColor *  `#` +(Math.floor(Math.random()*77215).toString(16));
    colourvalue.textContent = value; 

}
displayValue();

Generatebtn.addEventListener("click", displayValue);
