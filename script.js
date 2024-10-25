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



// ! display an image when a predefined colour is set
// const prebtn = document.getElementById("prebtn");

// preDefined ={
//     "#D20103" : ".image1" , 
//     "#490F59" : ".image2",
//     "#4F739F" : ".image3",


// };

// const preDefinedKeys = Object.keys(preDefined);
// const randomColor = preDefinedKeys[Math.floor(Math.random() * preDefinedKeys.length)];
      


// function Pre (){
//     let quote = preDefined[Math.floor(Math.random() * preDefined.length)]; 
//     document.body.style.backgroundColor = quote;
//     document.body.className = preDefined[quote];
//     colourvalue.textContent = quote; 
    // console.log(preDefined);
// }
// Pre(); 
// prebtn.addEventListener("click", Pre);

// ! display colour value on screen

// const colourvalue = document.getElementById("colourvalue");

// function displayValue(){
//     const value = randomColor *  `#` +(Math.floor(Math.random()*77215).toString(16));
//     colourvalue.textContent = value; 

// }
// displayValue();

// Generatebtn.addEventListener("click", displayValue);

/* this didnt work because randomcolor is a variable in another function and cant be accessed.*/


// ! generate random image

function getRandomImage() {
    const images = [
        "https://housing.com/news/wp-content/uploads/2023/04/Beautiful-black-flowers-to-grow-at-home-04.png",
      "https://th.bing.com/th/id/R.995809b4b5eb1e5f2fb4f33835375be4?rik=f%2bjc5eQ9Kt%2fH9Q&pid=ImgRaw&r=0",
      
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];
    document.getElementById('randomImage').src = selectedImage;}