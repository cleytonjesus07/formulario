
let formArea = document.getElementsByClassName('container_form')[0];
let telaMenu = document.getElementsByClassName("tela_menu")[0];
let btnForm = document.getElementById("btnForm");

 let submit = document.querySelector("input[type=submit]");

submit.addEventListener("click",()=>irParaTelaFormulario(false))

window.onload = () => {  
    preencherSelect();
     document.body.style.overflow = "hidden"
    definirProporcoesDaTela();
    configurarCalendario();
    btnForm.addEventListener("click",() => {
       if(document.getElementsByTagName("body")[0].clientWidth < 600){
        telaMenu.style.opacity = 0;
        formArea.style.opacity = 1;
        formArea.style.zIndex = 2;
       }else{
        irParaTelaFormulario(true)
       }
        
    })
}

function configurarCalendario() {
    let calendario = document.getElementById("calendario");
    let data = new Date().toLocaleDateString("en-ZA");
    data = data.replace("/", "-").replace("/", "-")
    calendario.max = `${data}`
}



function irParaTelaFormulario(option) {
    if(option){
        window.scrollBy(formArea.scrollWidth + 500,0)
    }else{
        window.scrollBy(formArea.scrollWidth - formArea.clientWidth,0)
    }
    
}

function preencherSelect() {
    let estados = [
        { uf: 'AC', nome: 'Acre' },
        { uf: 'AL', nome: 'Alagoas' },
        { uf: 'AP', nome: 'Amapá' },
        { uf: 'AM', nome: 'Amazonas' },
        { uf: 'BA', nome: 'Bahia' },
        { uf: 'CE', nome: 'Ceará' },
        { uf: 'DF', nome: 'Distrito Federal' },
        { uf: 'ES', nome: 'Espirito Santo' },
        { uf: 'GO', nome: 'Goiás' },
        { uf: 'MA', nome: 'Maranhão' },
        { uf: 'MS', nome: 'Mato Grosso do Sul' },
        { uf: 'MT', nome: 'Mato Grosso' },
        { uf: 'MG', nome: 'Minas Gerais' },
        { uf: 'PA', nome: 'Pará' },
        { uf: 'PB', nome: 'Paraíba' },
        { uf: 'PR', nome: 'Paraná' },
        { uf: 'PE', nome: 'Pernambuco' },
        { uf: 'PI', nome: 'Piauí' },
        { uf: 'RJ', nome: 'Rio de Janeiro' },
        { uf: 'RN', nome: 'Rio Grande do Norte' },
        { uf: 'RS', nome: 'Rio Grande do Sul' },
        { uf: 'RO', nome: 'Rondônia' },
        { uf: 'RR', nome: 'Roraima' },
        { uf: 'SC', nome: 'Santa Catarina' },
        { uf: 'SP', nome: 'São Paulo' },
        { uf: 'SE', nome: 'Sergipe' },
        { uf: 'TO', nome: 'Tocantins' }
    ]

    estados.sort(function (a, b) {
        return a.nome > b.nome ? -1 : a.nome < b.nome ? 1 : 0;
    })
    const select = document.getElementById("blankSelect");

    estados.forEach((estado) => {
        let option = document.createElement("option");
        select.after(option);
        option.value = estado.uf;
        option.innerText = estado.nome;
    })

}

function definirProporcoesDaTela() {
    let bodyWidth2x = document.getElementsByTagName("body")[0].clientWidth * 2;
    if(document.getElementsByTagName("body")[0].clientWidth > 600){
        document.getElementsByClassName("container")[0].style.width = `${bodyWidth2x}px`
        document.getElementsByClassName("container")[0].style.height = `100vh`;
        return;
      
    }
    document.getElementsByClassName("container")[0].style.height = `auto`;
}