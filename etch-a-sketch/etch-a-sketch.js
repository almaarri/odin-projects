
//select container
const container = document.querySelector('#container');

//create array to hold divs
let divs = [];

//create counter for array index
let counter = 0;

//create divs
function createDivs(){
for(i=1;i<17;i++){
    for (j=1; j<17;j++) {
    divs[counter] = document.createElement('div');
    divs[counter].classList.add('gridDivs');
    divs[counter].style.gridColumn = i;
    divs[counter].style.gridRow = j;
    container.appendChild(divs[counter]);
    counter++;
    }//j for
}//i for

//add even listener
let divList = document.querySelectorAll(".gridDivs");
divList.forEach(function(divs)
{ divs.addEventListener('mouseenter', function(){divs.style.backgroundColor = 'black';})});
//divObject.addEventListener('mouseenter', function(){divObject.style.backgroundColor = 'black';});

}//createDivs

createDivs();