let pallete = document.getElementById('pallete');
let colors = document.getElementsByClassName('option');

function displayColors(){

    for(let i=0; i<colors.length; i++){
        let actColor = document.getElementById(colors[i].id);
        actColor.style.backgroundColor = `${colors[i].id}`;

        actColor.style.height = `${pallete.offsetHeight/colors.length}px`;
    }
}

displayColors();

pallete.addEventListener('click', event => {
    let selected = event.target;
    document.body.style.backgroundColor=`${selected.id}`;
})

let form = document.forms['newColor'];

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    
    let r = Number(form.redInput.value);
    let g = Number(form.greenInput.value);
    let b = Number(form.blueInput.value);
    
    const isValid = x => typeof(x) == 'number' && x>0 && x<=255;

    // console.log((colors.filter(x=>x.id==`rgb(${r},${g},${b})`)));
    
    if([r,g,b].map(x=>isValid(x)).filter(x=>x==false).length==0){
        const ncolor = document.createElement('li');
        ncolor.classList.add('option');
        ncolor.id = `rgb(${r},${g},${b})`;
        document.getElementById('list').appendChild(ncolor);
        displayColors();
    }else{alert('Insert a valid number between 1 and 255.')}
})