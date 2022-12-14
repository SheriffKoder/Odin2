

let number_of_pixels = 16;
let intensity;

function gamePlay () {

        console.time('fetching data');

        //get the pixel_container and show its height for subDivs Size
        let px_container = document.querySelector(".pixel_container");
        //query selector to work on class better than get by class name


        console.log(px_container);
        console.log(px_container.scrollHeight);

        let subDiv_size = (px_container.offsetHeight/number_of_pixels);
        console.log(subDiv_size);



        /*////////////////////////////////////////////////////////////////////*/
        /*////////////////////////////////////////////////////////////////////*/

        //create a subDiv element with the new size as h/w and give border to show
        //append to pixel_container
        /*let subDiv = document.createElement("div");
        subDiv.setAttribute("style", `height:${subDiv_size}px; width:${subDiv_size}px;`);
        subDiv.classList= "subDiv";

        px_container.appendChild(subDiv);
        */

        //create another div to be beside it
        /*let subDiv2 = document.createElement("div");
        subDiv2.setAttribute("style", `height:${subDiv_size}px; width:${subDiv_size}px;`);
        subDiv2.classList= "subDiv" ;

        px_container.appendChild(subDiv2);
        */



        /*////////////////////////////////////////////////////////////////////*/
        /*////////////////////////////////////////////////////////////////////*/

        //convert that creation into a for loop
        //store names into an array
        //add another loop to add another row
        let subDivs = [];

        for (j=0; j<number_of_pixels; j++) {

            //console.log("this is row"+ j);
            //let icollector = [];

            subDivs[j]= [];

            for (i=0; i<number_of_pixels; i++) {

                //icollector[i] = i;

                subDivs[j][i] = document.createElement("div");
                subDivs[j][i].setAttribute("style", `height:${subDiv_size-0.11}px; width:${subDiv_size-0.11}px;`);
                subDivs[j][i].classList= "subDiv";
                subDivs[j][i].setAttribute("id", "pixel");

                px_container.appendChild(subDivs[j][i]);
                
            }

            //console.log(icollector);
        }
        console.log((subDivs.length * subDivs[1].length)+ " pixels");




        /*////////////////////////////////////////////////////////////////////*/
        /*////////////////////////////////////////////////////////////////////*/

        //with each div created has an id of pixel
        //add an mouse-click event on the pixel container (to save cpu) //find another solution
        //the pixel/mouseover gets a black color
        //the pixel has to be clicked
        
        let pixels = document.querySelectorAll("#pixel");


        px_container.addEventListener("mousedown", () => {
            
            //reset intensity each time container is clicked

            intensity = 255;

            pixels.forEach(pixel => {
                pixel.addEventListener("mouseover", trailinFunction, intensity);
                //pixel.addEventListener("mouseout", trailoutFunction);
            
            });

        
        });

        console.timeEnd('fetching data');

}


function trailinFunction (e) {
   //console.log(e);
   
    let current_pixel = e.target;
    if(e.buttons) {     //clicked
        current_pixel.style.backgroundColor = `rgb(${intensity},0,0)`;

    }

    //decrease intensity with each new pixel
    intensity-=10;

}

function trailoutFunction (e) {
    // console.log(e.target);
    let current_pixel = e.target;
    current_pixel.style.backgroundColor = "white";

}


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/

//add a button to prompt for number of pixels
//maximum 32px
//

let buttonPixel = document.querySelector(".px_btn");
buttonPixel.addEventListener("click", buttonClicked);

function buttonClicked () {

    let number_of_pixels2;

    while ( (number_of_pixels2 > 32 || number_of_pixels2 == undefined) && number_of_pixels2 !== null) {
        number_of_pixels2 = prompt("please enter pixel value less than 32");

        //if (number_of_pixels2 == null) return 1;

    }


    console.log("number_of_pixels2 "+number_of_pixels2)
    document.querySelector(".displayText").textContent = "mode : " + number_of_pixels2 + "px";
    number_of_pixels = number_of_pixels2;

    gamePlay();
}




//add a reset button
let resetButton = document.querySelector(".reset_btn");
resetButton.addEventListener("click", resetClicked);

function resetClicked () {

}