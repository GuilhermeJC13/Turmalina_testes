# Despesa Extra Orçamentária

O tipo Contrato possui diversas propriedades que representam as informações básicas que compõe um contrato administrativo. A seguir estão os nomes das propriedades definidas do tipo:

## Tipo: ExtraBudgetExpenditure

| PROPERTY | EXPECTED TYPE | DESCRIPTION |
| ------ | ------ | ------ |
| realizedAmount | number:float | Campo monetário contendo o valor realizado da despesa extra orçamentária |
| extraBudgetRevenueID | text |  Campo texto contendo o código da receita extra orçamentária |

Esse é um exemplo em HTML
```html
    <h2>Receita Extra Orçamentária</h1>
    <div itemscope itemtype="Unipt.org/ExtraBudgetRevenue">
        <table>
            <caption>Descrição</caption>
            <!-- Cabeçalho da tabela  -->
            <tr>
                <th itemprop="realizedAmount">Nome da unidade gestora</th>
                <th itemprop="extraBudgetRevenueID">Código da unidade gestora</th>
            </tr>
            <!-- Dados referentes a certa linha da tabela  -->
            <tr>
                <td itemprop="realizedAmount">2.257,68</th>
                <td itemprop="extraBudgetRevenueID">0017792/2021</th>
            </tr>
        </table>
    </div>
```
