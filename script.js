// ! generate random colour
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
const prebtn = document.getElementById("prebtn");

let preDefined =[
    "#D20103" , 
    "#490F59" ,
     `#B8D611`, `#4F739F`,
]

function Pre (){
    let quote = preDefined[Math.floor(Math.random() * preDefined.length)]; 
    document.body.style.backgroundColor = quote;
    colourvalue.textContent = quote; 
    console.log(preDefined);
}
Pre(); 
prebtn.addEventListener("click", Pre);




