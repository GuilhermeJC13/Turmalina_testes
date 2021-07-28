const proprietys = [
    {
        Name: "receita orçamentária",
        Url: "#/contract"
    },
    {
        Name: "despesa orçamentária",
        Url: "#/contract"
    },
    {
        Name: "despesa extra orçamentária",
        Url: "#/contract"
    },
    {
        Name: "empenho",
        Url: "#/contract"
    },
    {
        Name: "documento de pagamento",
        Url: "#/contract"
    },

    {
        Name: "contrato",
        Url: "#/contract"
    },

    {
        Name: "instrumento de planejamento",
        Url: "#/contract"
    },

    {
        Name: "procedimento licitatório",
        Url: "#/bidding"
    },

    {
        Name: "convênio",
        Url: "#/contract"
    },

    {
        Name: "informação",
        Url: "#/contract"
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
