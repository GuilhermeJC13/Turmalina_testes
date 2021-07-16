# Contrato

O tipo Contrato possui diversas propriedades que representam as informações básicas que compõe um contrato administrativo. A seguir estão os nomes das propriedades definidas do tipo:

| PROPERTY | EXPECTED TYPE | DESCRIPTION |
| ------ | ------ | ------ |
| managementUnitName | text/string | Campo texto contendo o nome da unidade gestora do setor interessado |
| managementUnitID | number/integer | Campo numérico contendo o código da unidade gestora do setor interessado |
| contractorName | text/string | Campo texto contendo o nome do contratado |
| nationalIdentificationNumber | number/integer | Campo numérico contendo o CPF do contratado |
| companyIdentificationNumber | number/integer | Campo numérico contendo o CNPJ do contratado |
| publicationDate | date | Data referente à publicação do extrato de contrato |
| validityDate | date | Prazo/Data de vigência do contrato |
| object | text/string | Campo referente à descrição do objeto do contrato |
| contractID | number/integer | Campo texto contendo o código de identificação do contrato |

<br></br>

## Esse é um exemplo em HTML

```html
    <h2>Contrato</h1>
    <div itemscope itemtype="Unipt.org/Contrato">
        <table>
            <caption>Descrição</caption>
            <!-- Cabeçalho da tabela  -->
            <tr>
                <th itemprop="managementUnitNam">Nome da unidade gestora</th>
                <th itemprop="managementUnitID">Código da unidade gestora</th>
                <th itemprop="contractorName">Nome do Contratado</th>
                <th itemprop="nationalIdentificationNumber">Cpf do Contratado</th>
                <th itemprop="companyIdentificationNumber">Cnpj do contratado</th>
                <th itemprop="publicationDate">Data da publicação do contrato</th>
                <th itemprop="validityDate">Data de vigência do contrato</th>
                <th itemprop="object">Descrição do objeto contratado</th>
                <th itemprop="contractID">Código de identificação do contrato</th>
            </tr>
            <!-- Dados referentes a certa linha da tabela  -->
            <tr>
                <td itemprop="managementUnitNam">Unidade Gestora</th>
                <td itemprop="managementUnitID">2000000-0</th>
                <td itemprop="contractorName">Contrato X</th>
                <td itemprop="nationalIdentificationNumber">453.178.287-91</th>
                <td itemprop="companyIdentificationNumber">73.825.864/0001-16</th>
                <td itemprop="publicationDate">05/02/2002</th>
                <td itemprop="validityDate">30/03/2002</th>
                <td itemprop="object">Descrição</th>
                <td itemprop="contractID">121212</th>
            </tr>
        </table>
    </div>
```