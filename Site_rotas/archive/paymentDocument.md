# Documento de Pagamento

O tipo Contrato possui diversas propriedades que representam as informações básicas que compõe um contrato administrativo. A seguir estão os nomes das propriedades definidas do tipo:

## Tipo: paymentDocument
| PROPERTY | EXPECTED TYPE | DESCRIPTION |
| ------ | ------ | ------ |
| managementUnitName | text | Campo texto contendo o nome da unidade gestora |
| managementUnitID | text |  Campo texto contendo o código da unidade gestora |
| bankOperationID | text | Campo texto contendo a identificação da operação bancária realizada |
| bankAccountNumber | text | Campo texto contendo o número da conta bancária |
| paymentDate | text | Campo texto contendo a data do pagamento |
| identificationNumber | text | Campo texto contendo o CPF ou CNPJ do favorecido do pagamento |
| creditorName | text | Campo texto contendo o nome do favorecido do pagamento |
| paymentAmount | text | Campo monetário contendo o valor do pagamento |
| fundingSource | text | Campo texto contendo a fonte de recursos do pagamento |
| paymentHistory | text | Campo texto contendo a descrição do histórico do pagamento |

Esse é um exemplo em HTML
```
<html>
    <h2>Documento de Pagamento</h2>
    <div itemscope itemtype="Unipt.org/PaymentDocument">
        <table>
            <caption>Descrição</caption>
            <!-- Cabeçalho da tabela  -->
            <tr>
                <th itemprop="managementUnitName">Nome da unidade gestora</th>
                <th itemprop="managementUnitID">Código da unidade gestora</th>
                <th itemprop="bankOperationID">Número da operação bancária</th>
                <th itemprop="bankAccountNumber">Número da conta bancária</th>
                <th itemprop="identificationNumber">CNPJ</th>
                <th itemprop="creditorName">Nome do favorecido</th>
                <th itemprop="paymentAmount">Valor do Pagamento</th>
                <th itemprop="fundingSource">Fonte do recurso</th>
                <th itemprop="paymentHistory">Histórico do pagamento</th>
            </tr>
            <!-- Dados referentes a certa linha da tabela  -->
            <tr>
                <td itemprop="managementUnitName">FUNDO MUNICIPAL DE SAUDE</th>
                <td itemprop="managementUnitID">03011</th>
                <td itemprop="bankOperationID">005131 - PAGAMENTO</th>
                <td itemprop="bankAccountNumber">000000134600 - BB C/C 13.460-0 FUNDO M. DE SAUDE</th>
                <td itemprop="paymentDate">15/07/2021</th>
                <td itemprop="identificationNumber">02708218000120</th>
                <td itemprop="creditorName">GILDO JOSE DA SILVA ME</th>
                <td itemprop="paymentAmount">R$ 22.087,74</th>
                <td itemprop="fundingSource">211 - Receitas de Impostos e de Transferência de Imposto</th>
                <td itemprop="paymentHistory">VALOR QUE ORA SE EMPENHA P ATENDER DESPESA COM AQUISIÇÃO DE MEDICAMENTOS PARA DISTRIBUIÇÃO COM A POPULAÇAO ATRAVES DE ORDEM JUDICIAL</th>
            </tr>
        </table>
    </div>
</html>
```
