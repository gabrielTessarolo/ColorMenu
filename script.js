let pallete = document.getElementById('pallete');
let colors = document.getElementsByClassName('option');

function displayColors(){
    // Função que lê cada um dos elementos <li> que representam as cores. Ela atribui a cada elemento o nome da cor ou o código rgb especificados em seu ID a sua propriedade background-color, e redefine a largura de cada retângulo com base no número total de cores.
    for(let i=0; i<colors.length; i++){
        let actColor = document.getElementById(colors[i].id);
        actColor.style.backgroundColor = `${colors[i].id}`;
        actColor.style.width = `${Math.floor(pallete.offsetWidth/colors.length)}px`;
    }
    
}

displayColors();

pallete.addEventListener('click', event => {
    // Aplica a cor selecionada ao plano de fundo da página.
    let selected = event.target;
    document.body.style.backgroundColor=`${selected.id}`;
})

let form = document.forms['newColor'];

form.addEventListener("submit", (event)=>{
    event.preventDefault(); // Evita que a página seja recarregada ao enviar o formulário.
    
    // Pega o valor rgb especificado pelo usuário.
    let r = Number(form.redInput.value);
    let g = Number(form.greenInput.value);
    let b = Number(form.blueInput.value);
    
    const isValid = x => {
        // Verifica se a cor é composta por um valor RGB válido e ainda não presente na paleta de cores.
        return x.map(i=>typeof(i) == 'number' && i>0 && i<=255).filter(i=>i==false).length==0 &&
        Array.from(colors).filter(x=>x.id==`rgb(${r},${g},${b})`).length==0;
    }
    
    if(isValid([r,g,b])){
        // Adiciona uma cor à paleta conforme o código RGB especificado pelo usuário.
        let ncolor = document.createElement('li');
        ncolor.classList.add('option');
        ncolor.id = `rgb(${r},${g},${b})`;
        document.getElementById('list').appendChild(ncolor);
        displayColors();
    }else{alert('Insert a valid number between 1 and 255.')}
})

window.addEventListener('resize', (e) => displayColors());