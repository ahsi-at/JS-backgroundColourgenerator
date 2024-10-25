// ! generate rand colour
const Generatebtn = document.getElementById("Generatebtn");

function colorButton(){
    const randomColor = `#` + Math.floor(Math.random()*77215).toString(16);
    document.body.style.backgroundColor = randomColor;
    console.log(randomColor);
    colourvalue.textContent = randomColor;


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
    colourvalue.textContent = pastelrandomColor;
   

}
pastelcolorButton()

pastelbtn.addEventListener("click", pastelcolorButton);



// ! predefined colours



// ! display colour value on screen

// const colourvalue = document.getElementById("colourvalue");

// function displayValue(){
//     const value = randomColor *  `#` +(Math.floor(Math.random()*77215).toString(16));
//     colourvalue.textContent = value; 

// }
// displayValue();

// Generatebtn.addEventListener("click", displayValue);

/* this didnt work because randomcolor is a variable in another function and cant be accessed.*/
