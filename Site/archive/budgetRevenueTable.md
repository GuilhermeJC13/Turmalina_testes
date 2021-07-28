# Receitas Orçamentárias

O tipo Contrato possui diversas propriedades que representam as informações básicas que compõe um contrato administrativo. A seguir estão os nomes das propriedades definidas do tipo:

## Tipo: BudgetRevenue
| PROPERTY | EXPECTED TYPE | DESCRIPTION |
| ------ | ------ | ------ |
| managementUnitName | text | Campo texto contendo o nome da unidade gestora |
| managementUnitID | text | Campo texto contendo o código da unidade gestora |
| economicCategory | text | Campo referente à classificação da categoria econômica da receita orçamentária |
| revenueSource | text | Campo texto referente à classificação da origem da receita orçamentária |
| revenueSpecie | text | Campo texto contendo a espécie da receita orçamentária |
| revenueRubric | text | Campo texto contendo a rubrica da receita orçamentária |
| revenueParagraph | text | Campo texto contendo a alínea da receita orçamentária |
| revenueSubparagraph | text | Campo texto contendo a sub-alínea da receita orçamentária |
| predictedAmount | number:float | Campo monetário contendo o valor da previsão inicial da receita orçamentária |
| collectionAmount | number:float | Campo monetário contendo o valor arrecadado da receita orçamentária |
| revenueEntryAmount | number:float | Campo monetário contendo o valor do lançamento da receita orçamentária |

Esse é um exemplo em HTML
```html
    <h2>Receitas Orçamentárias</h1>
    <div itemscope itemtype="Unipt.org/BudgetRevenue">
        <table>
            <caption>Descrição</caption>
            <!-- Cabeçalho da tabela  -->
            <tr>
                <th itemprop="managementUnitName">Nome da unidade gestora</th>
                <th itemprop="managementUnitID">Código da unidade gestora</th>
                <th itemprop="economicCategory">Categoria Econômica</th>
                <th itemprop="revenueSource">Origem da Receita</th>
                <th itemprop="revenueSpecie">Espécie da Receita</th>
                <th itemprop="revenueRubric">Rúbrica</th>
                <th itemprop="revenueParagraph">Alínea</th>
                <th itemprop="revenueSubparagraph">Sub-alínea</th>
                <th itemprop="predictedAmount">Valor Previsto</th>
                <th itemprop="collectionAmount">Valor Aarrecadado</th>
                <th itemprop="revenueEntryAmount">Valor Lançado</th>
            </tr>
            <!-- Dados referentes a certa linha da tabela  -->
            <tr>
                <td itemprop="managementUnitName">PREFEITURA DE POCINHOS</th>
                <td itemprop="managementUnitID">00000.000-0</th>
                <td itemprop="economicCategory">Contrato X</th>
                <td itemprop="revenueSource">0.209-Outros Recursos Não Vinculados</th>
                <td itemprop="revenueSpecie">Descrição</th>
                <td itemprop="revenueRubric">XX/XX/XXXX</th>
                <td itemprop="revenueParagraph">XX/XX/XXXX</th>
                <td itemprop="revenueSubparagraph">Nome</th>
                <td itemprop="predictedAmount">R$ 2.761.550,00</th>
                <td itemprop="collectionAmount">R$ 1.187.493,44</th>
                <td itemprop="revenueEntryAmount">XX/XX/XXXX</th>
            </tr>
        </table>
    </div>
```
