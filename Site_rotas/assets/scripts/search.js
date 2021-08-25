
// type = Name shown
// Name = Names that are used in search
// URL = path

const proprietys = [
    {
        Type: "Receita Orçamentária",
        Name: "receita orçamentária budgetRevenue managementUnitName managementUnitID economicCategory revenueSource revenueSpecie revenueRubric revenueParagraph revenueSubparagraph predictedAmount collectionAmount revenueEntryAmount",
        Url: "/budgetRevenue"
    },
    {
        Type: "Receita Extraorçamentária",
        Name: "receita extra orçamentária extraBudgetRevenue realizedAmount extraBudgetRevenueID",
        Url: "/extraBudgetRevenue"
    },
    {
        Type: "Despesa Orçamentária",
        Name: "despesa orçamentária budgetExpenditure managementUnitName managementUnitID function subfunction program action economicCategory source modality element subelement fixedAmount settledAmount paymentAmount identificationNumber bidModality bidID contractID comittedExpenditureID comittedExpenditureObject comittedExpenditureDate paymentInstallmentDate",
        Url: "/budgetExpenditure"
    },
    {
        Type: "Despesa Extraorçamentária",
        Name: "despesa extra orçamentária extraBudgetExpenditure realizedAmount extraBudgetRevenueID",
        Url: "/extraBudgetExpenditure"
    },
    {
        Type: "Empenho",
        Name: "empenho comittedExpenditure budgetaryUnitName budgetaryUnitID identificationNumber creditorName comittedExpenditureHistory",
        Url: "/comittedExpenditure"
    },
    {
        Type: "Documento de Pagamento",
        Name: "documento de pagamento paymentDocument managementUnitName managementUnitID bankOperationID bankAccountNumber paymentDate identificationNumber creditorName paymentAmount fundingSource paymentHistory",
        Url: "/paymentDocument"
    },

    {
        Type: "Contratos",
        Name: "contrato contract managementUnitName managementUnitID contractorName identificationNumber publicationDate validityDate contractAmount object contractID",
        Url: "/contract"
    },

    {
        Type: "Instrumento de Planejamento",
        Name: "instrumento de planejamento planningInstrument multiyearPlan budgetGuidelinesLaw",
        Url: "/planningInstrument"
    },

    {
        Type: "Procedimentos Licitatórios",
        Name: "procedimento licitatório licitatorio bidding managementUnitName managementUnitID bidID bidModality object publicationDate realizationDate bidderName identificationNumber bidderProposalAmount",
        Url: "/bidding"
    },

    {
        Type: "Convênios",
        Name: "convênio convenio agreement agreementID grantorName contractorName celebrationDate publicationDate validityDate object agreementAmount counterpartAmount",
        Url: "/agreement"
    },

    {
        Type: "Pessoal",
        Name: "Pessoal employeeInformation employeeName identificationNumber employmentContractType employeePosition employeeSalary",
        Url: "/employeeInformation"
    },

    {
        Type: "Como começar",
        Name: "tutorial como começar starting",
        Url: "/tutorial"
    }
];


const names = document.getElementById("search"); // take search text

const nav = document.getElementById("ol"); // take sidebar

total = nav.innerHTML; // keep sidebar

names.addEventListener("keyup", function(event) {

    // filter based on the text sent
    const matchs = proprietys.filter(value => {

        var n = names.value

        var x = value.Name
    
        // if the text was found, return it
        return x.toLowerCase().indexOf(n.toLowerCase()) !== -1;
    
    });
        
    // Add results into HTML

    nav.innerHTML = ""

    for (let propriety of matchs) {
        if(names.value != "" && matchs.length > 0){
            nav.innerHTML += "<li> <a class='nav-link' href = '"+propriety.Url+"'>"+propriety.Type+"</a> </li>"; // change sidebar with results if it exists
        }
        else{
            nav.innerHTML = total // give sidebar the original value
        }
    }
});