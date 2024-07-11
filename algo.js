const homeDiv = document.querySelector(".home"); 
let canvas;
function drawCanvas(size)
{   
    let total= ((homeDiv.clientWidth-(2*size))/size);
    canvas=size;
    for(let i=0; i<size*size;  i++)
    {
        
        const pixel = document.createElement("div");
        pixel.setAttribute("class", "screen");
        pixel.style.cssText = "width:"+total+ "px;"+ "height:"+total+ "px;";
        homeDiv.appendChild(pixel);
    }
} 

function clearCanvas()
{
    const divClear = document.querySelectorAll(".screen"); 
    divClear.forEach(removeAll);
    drawCanvas(canvas);
    drawTrail();
}

/*function paintReset(item)
{
    item.style.backgroundColor="red";
}*/

function drawCanvasOriginal()
{
    const divClear = document.querySelectorAll(".screen"); 
    divClear.forEach(removeAll);
    drawCanvas(16);
    drawTrail();
}

function removeAll(destroy)
{
    homeDiv.removeChild(destroy);
}

function newCanvas()
{
    canvas = prompt("Enter new canvas size between 1 and 100");
    if(canvas<1 || canvas>100){
        alert("size not supported");
    }else{
        const divClear = document.querySelectorAll(".screen"); 
        divClear.forEach(removeAll);
        drawCanvas(canvas);
        drawTrail();
    }
}

function drawTrail()
{
    const draw = document.querySelectorAll(".screen");
    
    draw.forEach(function(object1) {
        object1.addEventListener("mouseover", 
            (e)=>paint(e.target) 
    );
     
    });
    
}

function paint(item)
{
    item.classList.add("colored");
}
drawCanvas(16);   
drawTrail();
