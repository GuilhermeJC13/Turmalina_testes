const proprietys = [
    {
        Type: "receita orçamentária",
        Name: "receita orçamentária budgetRevenue managementUnitName managementUnitID economicCategory revenueSource revenueSpecie revenueRubric revenueParagraph revenueSubparagraph predictedAmount collectionAmount revenueEntryAmount",
        Url: "/budgetRevenue"
    },
    {
        Type: "receita extra orçamentária",
        Name: "receita extra orçamentária extraBudgetRevenue realizedAmount extraBudgetRevenueID",
        Url: "/extraBudgetRevenue"
    },
    {
        Type: "despesa orçamentária",
        Name: "despesa orçamentária budgetExpenditure managementUnitName managementUnitID function subfunction program action economicCategory source modality element subelement fixedAmount settledAmount paymentAmount identificationNumber bidModality bidID contractID comittedExpenditureID comittedExpenditureObject comittedExpenditureDate paymentInstallmentDate",
        Url: "/budgetExpenditure"
    },
    {
        Type: "despesa extra orçamentária",
        Name: "despesa extra orçamentária extraBudgetExpenditure realizedAmount extraBudgetRevenueID",
        Url: "/extraBudgetExpenditure"
    },
    {
        Type: "empenho",
        Name: "empenho comittedExpenditure budgetaryUnitName budgetaryUnitID identificationNumber creditorName comittedExpenditureHistory",
        Url: "/comittedExpenditure"
    },
    {
        Type: "documento de pagamento",
        Name: "documento de pagamento paymentDocument managementUnitName managementUnitID bankOperationID bankAccountNumber paymentDate identificationNumber creditorName paymentAmount fundingSource paymentHistory",
        Url: "/paymentDocument"
    },

    {
        Type: "contrato",
        Name: "contrato contract managementUnitName managementUnitID contractorName identificationNumber publicationDate validityDate contractAmount object contractID",
        Url: "/contract"
    },

    {
        Type: "instrumento de planejamento",
        Name: "instrumento de planejamento planningInstrument multiyearPlan budgetGuidelinesLaw",
        Url: "/planningInstrument"
    },

    {
        Type: "procedimento licitatório",
        Name: "procedimento licitatório bidding managementUnitName managementUnitID bidID bidModality object publicationDate realizationDate bidderName identificationNumber bidderProposalAmount",
        Url: "/bidding"
    },

    {
        Type: "convênio",
        Name: "convênio agreement agreementID grantorName contractorName celebrationDate publicationDate validityDate object agreementAmount counterpartAmount",
        Url: "/agreement"
    },

    {
        Type: "Pessoal",
        Name: "Pessoal employeeInformation employeeName identificationNumber employmentContractType employeePosition employeeSalary",
        Url: "/employeeInformation"
    },

    {
        Type: "tutorial",
        Name: "tutorial começar starting",
        Url: "/tutorial"
    }
];


const names = document.getElementById("search");

const list = document.getElementById("result");

const nav = document.getElementById("empty-text");

const but = document.getElementById("button");


names.addEventListener("keyup", function(event) {

    // Filtramos a lista de filmes com base no texto digitado:
    const matchs = proprietys.filter(value => {

        var n = names.value

        var x = value.Name
    
        // Se o texto digitado for encontrado no título, retorna o registro:
        return x.toLowerCase().indexOf(n.toLowerCase()) !== -1;
    
    });
        
    // Exibe no HTML a lista de filmes do resultado do filtro anterior:
    list.innerHTML = "";
    list.style.display = "none";
    nav.style.display = "flex";

    for (let propriety of matchs) {
        if(names.value != "" && matchs.length > 0){
            list.innerHTML += "<div class = 'search-bar' ><a href='"+propriety.Url+"'>"+propriety.Type+"</a></div>";
            list.style.display = "inline-block";
            nav.style.display = "none";
        }
        else{
            list.style.display = "none";
            nav.style.display = "flex";
        }
    }
});
