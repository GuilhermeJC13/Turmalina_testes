# Despesa Orçamentária

O tipo Contrato possui diversas propriedades que representam as informações básicas que compõe um contrato administrativo. A seguir estão os nomes das propriedades definidas do tipo:

## Tipo: BudgetExpenditure
| PROPERTY | EXPECTED TYPE | DESCRIPTION |
| ------ | ------ | ------ |
| managementUnitName | text | Campo texto contendo o nome da unidade gestora |
| managementUnitID | text | Campo texto contendo o código da unidade gestora |
| function | text | Campo texto contendo a descrição da função/finalidade da despesa orçamentária |
| subfunction | text | Campo texto contendo a descrição da subfunção da despesa orçamentária |
| program | text | Campo texto contendo o programa da despesa orçamentária |
| action | text | Campo texto contendo a ação da despesa orçamentária |
| economicCategory | text | Campo referente à classificação da categoria econômica da despesa orçamentária |
| source | text |  Campo texto referente à classificação da origem da despesa orçamentária |
| modality | text | Campo texto contendo a modalidade da despesa orçamentária |
| element | text |  Campo texto contendo o elemento da despesa orçamentária |
| subelement | text |  Campo texto contendo o subelemento da despesa orçamentária |
| fixedAmount | number:float | Campo monetário contendo o valor do orçamento fixado pela Lei Orçamentária Anual |
| settledAmount | number:float | Campo monetário contendo o valor liquidado da despesa orçamentária |
| paymentAmount | number:float | Campo monetário contendo o valor pago da despesa orçamentária |
| identificationNumber | text | Campo texto contendo o CPF ou CNPJ do credor |
| bidModality | text | Campo texto contendo o nome da modalidade de licitação da despesa orçamentária licitada |
| bidID | text | Campo texto referente ao número de ordem da licitação, em série anual, da despesa orçamentária licitada |
| contractID | text | Campo referente ao número de identificação do contrato da despesa orçamentária licitada |
| comittedExpenditureID | text | Campo referente ao número da nota de empenho da despesa orçamentária licitada |
| comittedExpenditureObject | text | Campo referente à descrição do objeto da despesa orçamentária licitada |
| comittedExpenditureDate | date | Campo texto referente a data do empenho da despesa orçamentária licitada (formato DD/MM/YYYY)|
| paymentInstallmentDate | text |  Campo referente a data do pagamento da última parcela da despesa orçamentária licitada |

Esse é um exemplo em HTML
```html
    <h2>Despesa Orçamentária</h2>
    <div itemscope itemtype="Unipt.org/BudgetRevenue">
        <table>
            <caption>Descrição</caption>
            <!-- Cabeçalho da tabela  -->
            <tr>
                <th itemprop="managementUnitName">Nome da unidade gestora</th>
                <th itemprop="managementUnitID">Código da unidade gestora</th>
                <th itemprop="function">Função</th>
                <th itemprop="subfunction">Subfunção</th>
                <th itemprop="program">Programa</th>
                <th itemprop="action">Ação</th>
                <th itemprop="economicCategory">Categoria Econômica</th>
                <th itemprop="source">Origem da Despesa</th>
                <th itemprop="specie">Espécie da Despesa</th>
                <th itemprop="element">Elemento da Despesa</th>
                <th itemprop="subelement">Subelemento da Despesa</th>
                <th itemprop="identificationNumber">CNPJ do Credor</th>
                <th itemprop="fixedAmount">Valor Fixado da Despesa</th>
                <th itemprop="settledAmount">Valor Liquidado</th>
                <th itemprop="paymentAmount">Valor Pago</th>
                <th itemprop="bidModality">Modalidade da Licitação</th>
                <th itemprop="bidID">Código da licitação</th>
                <th itemprop="contractID">Código do Contrato</th>
                <th itemprop="comittedExpenditureID">Código do Empenho</th>
                <th itemprop="comittedExpenditureObject">Objeto do Empenho</th>
                <th itemprop="comittedExpenditureDate">Data do Empenho</th>
                <th itemprop="paymentInstallmentDate">Data do pagamento da última parcela</th>
            </tr>
            <!-- Dados referentes a certa linha da tabela  -->
            <tr>
                <td itemprop="managementUnitName">SECRETARIA DE INFRA ESTRUTURA</th>
                <td itemprop="managementUnitID">01009</th>
                <td itemprop="function">15 - URBANISMO</th>
                <td itemprop="subfunction">451 - INFRA-ESTRUTURA URBANA</th>
                <td itemprop="program">1005 - ORDENAMENTO E GERENCIAMENTO DA INFRAESTRUTURA URBA</th>
                <td itemprop="action">2018 - Manut. das Atividades da Sec. de Infraestrutura</th>
                <td itemprop="economicCategory">3 - Despesas Correntes</th>
                <td itemprop="source">3390300000</th>
                <td itemprop="modality">90 - Aplicações Diretas</th>
                <td itemprop="element">30 - Material de Consumo</th>
                <td itemprop="subelement">019 - OUTROS MATERIAIS DE CONSUMO</th>
                <td itemprop="fixedAmount">R$ 10.000,00</th>
                <td itemprop="settledAmount">R$ 10.000,00</th>
                <td itemprop="paymentAmount">R$: 10000,00	</th>
                <td itemprop="identificationNumber">17711924000107</th>
                <td itemprop="bidID">000042021</th>
                <td itemprop="bidModality">11</th>
                <td itemprop="contractID">Nome</th>
                <td itemprop="comittedExpenditureID">2873</th>
                <td itemprop="comittedExpenditureObject">00000000000000</th>
                <td itemprop="comittedExpenditureDate">14/07/2021</th>
                <td itemprop="paymentInstallmentDate">16/07/2021</th>
            </tr>
        </table>
    </div>
```
