const proprietys = [{
        Name: "Contrato",
        Url: "/Guilherme/Site/pages/Contract/contract.html"
    },
    {
        Name: "Licitação",
        Url: "/Guilherme/Site/pages/Bidding/bidding.html"
    }
];


const names = document.getElementById("search");
const list = document.getElementById("result");

const nav = document.getElementById("empty-text");

names.addEventListener("keyup", function(event) {

    // Filtramos a lista de filmes com base no texto digitado:
    const matchs = proprietys.filter(value => {
    
        // Se o texto digitado for encontrado no título, retorna o registro:
        return value.Name.indexOf(this.value) !== -1;
    
    });
        
    // Exibe no HTML a lista de filmes do resultado do filtro anterior:
    list.innerHTML = "";
    for (let propriety of matchs) {
        if(names.value != ""){
            list.innerHTML += "<div><a href='"+propriety.Url+"'>"+propriety.Name+"</a></div>";
            nav.style.display = "none";
        }
        else{
            nav.style.display = "flex"
        }
    }
    });