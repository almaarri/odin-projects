
//select container
const container = document.querySelector('#container');

//create divs
function createDivs(){
for(i=1;i<17;i++){
    for (j=1; j<17;j++) {
    //let divname = `divcolumn${i}row${j}`;
    const `divcolumn${i}row${j}` = document.createElement('div');
    //content.classList.add('divname');
    divname.style.gridColumn = i;
    divname.style.gridRow = j;
    container.appendChild(divname);
    }//j for
}//i for
}//createDivs

createDivs();