const proprietys = [
    {
        Name: "receita orçamentária",
        Url: "../pages/contract.html"
    },
    {
        Name: "receita extra orçamentária",
        Url: "../pages/contract.html"
    },

    {
        Name: "despesa orçamentária",
        Url: "../pages/contract.html"
    },
    {
        Name: "despesa extra orçamentária",
        Url: "../pages/contract.html"
    },
    {
        Name: "empenho",
        Url: "../pages/contract.html"
    },
    {
        Name: "documento de pagamento",
        Url: "../pages/contract.html"
    },

    {
        Name: "contrato",
        Url: "../pages/contract.html"
    },

    {
        Name: "instrumento de planejamento",
        Url: "../pages/contract.html"
    },

    {
        Name: "procedimento licitatório",
        Url: "../pages/bidding.html"
    },

    {
        Name: "convênio",
        Url: "../pages/contract.html"
    },

    {
        Name: "informação",
        Url: "../pages/contract.html"
    }
];


const names = document.getElementById("search");
const list = document.getElementById("result");

const nav = document.getElementById("empty-text");

const but = document.getElementById("button");

names.addEventListener("keyup", function(event) {

    // Filtramos a lista de filmes com base no texto digitado:
    const matchs = proprietys.filter(value => {
    
        // Se o texto digitado for encontrado no título, retorna o registro:
        return value.Name.indexOf(names.value) !== -1;
    
    });
        
    // Exibe no HTML a lista de filmes do resultado do filtro anterior:
    list.innerHTML = "";
    list.style.display = "none";
    nav.style.display = "flex";

    for (let propriety of matchs) {
        if(names.value != "" && matchs.length > 0){
            list.innerHTML += "<div class = 'search-bar' ><a href='"+propriety.Url+"'>"+propriety.Name+"</a></div>";
            list.style.display = "inline-block";
            nav.style.display = "none";
        }
        else{
            list.style.display = "none";
            nav.style.display = "flex";
        }
    }
    });