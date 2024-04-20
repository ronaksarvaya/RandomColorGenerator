let boxes = document.getElementsByClassName("box")
console.log(boxes);

// boxes.style.backgroundcolor="red"; 
//the above line returns an html collection and "doesnt return an array" thus we need to iterate over the array to change the colour


function getRandomColour(){
    let Col1= Math.floor(Math.random()*(256));//256 is exclusive sp 255 is included
    let Col2= Math.floor(Math.random()*(256));
    let Col3= Math.floor(Math.random()*(256));

    return `rgb(${Col1},${Col2},${Col3})`
}



for(let i = 0; i<boxes.length;i++){
boxes[i].style.backgroundColor=getRandomColour();
}