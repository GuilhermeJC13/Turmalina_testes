# Empenhos

O tipo Contrato possui diversas propriedades que representam as informações básicas que compõe um contrato administrativo. A seguir estão os nomes das propriedades definidas do tipo:

## Tipo: ComittedExpenditure
| PROPERTY | EXPECTED TYPE | DESCRIPTION |
| ------ | ------ | ------ |
| budgetaryUnitName | text | Campo numérico contendo o nome da unidade orçamentária |
| budgetaryUnitID | text | Campo numérico contendo o código da unidade orçamentária |
| identificationNumber | text | Campo texto contendo o CPF ou CNPJ do favorecido do empenho |
| creditorName | text | Campo texto contendo o nome do favorecido do empenho |
| comittedExpenditureHistory | text | Campo texto contendo a descrição do histórico do empenho |

Esse é um exemplo em HTML
```
<html>
    <h2>Empenho</h2>
    <div itemscope itemtype="Unipt.org/BudgetRevenue">
        <table>
            <caption>Descrição</caption>
            <!-- Cabeçalho da tabela  -->
            <tr>
                <th itemprop="budgetaryUnitName">Nome da unidade gestora</th>
                <th itemprop="budgetaryUnitID">Código da unidade gestora</th>
                <th itemprop="identificationNumber">Categoria Econômica</th>
                <th itemprop="creditorName">Origem da Receita</th>
                <th itemprop="comittedExpenditureHistory">Espécie da Receita</th>
            </tr>
            <!-- Dados referentes a certa linha da tabela  -->
            <tr>
                <td itemprop="budgetaryUnitName">DIRETORIA ADMINIST/FINANCEIRA</th>
                <td itemprop="budgetaryUnitID">00000.000-0</th>
                <td itemprop="identificationNumber">00360305000104</th>
                <td itemprop="creditorName">CAIXA ECONOMICA FEDERAL</th>
                <td itemprop="comittedExpenditureHistory">VLR EMPENHADO P/COBERTURA DESPESAS TARIFAS BANCARIAS, CONF AUTORIZAÇÃO</th>
            </tr>
        </table>
    </div>
</html>
```
