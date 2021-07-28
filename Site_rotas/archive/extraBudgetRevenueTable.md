# Receitas Extra Orçamentárias

O tipo Contrato possui diversas propriedades que representam as informações básicas que compõe um contrato administrativo. A seguir estão os nomes das propriedades definidas do tipo:

## Tipo: ExtraBudgetRevenue

| PROPERTY | EXPECTED TYPE | DESCRIPTION |
| ------ | ------ | ------ |
| realizedAmount | number:float | Campo monetário contendo o valor realizado da despesa extra orçamentária |
| extraBudgetRevenueID | text | Campo texto contendo o código da receita extra orçamentária |

Esse é um exemplo em HTML
```
<html>
    <h2>Receita Extra Orçamentária</h1>
    <div itemscope itemtype="Unipt.org/ExtraBudgetRevenue">
        <table>
            <caption>Descrição</caption>
            <!-- Cabeçalho da tabela  -->
            <tr>
                <th itemprop="realizedAmount">Valor realizado</th>
                <th itemprop="extraBudgetRevenueID">Código da receita extra orçamentária</th>
            </tr>
            <!-- Dados referentes a certa linha da tabela  -->
            <tr>
                <td itemprop="realizedAmount">R$ 2.527,07</th>
                <td itemprop="extraBudgetRevenueID">218810108</th>
            </tr>
        </table>
    </div>
</html>
```
