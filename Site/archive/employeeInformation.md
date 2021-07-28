# Pessoal

O tipo Contrato possui diversas propriedades que representam as informações básicas que compõe um contrato administrativo. A seguir estão os nomes das propriedades definidas do tipo:

## Tipo: EmployeeInformation
| PROPERTY | EXPECTED TYPE | DESCRIPTION |
| ------ | ------ | ------ |
| employeeName | text | Campo texto contendo o nome do servidor |
| identificationNumber | text |  Campo texto contendo o CPF do servidor |
| employmentContractType | text | Campo texto contendo o tipo de contrato do servidor |
| employeePosition | text | Campo texto contendo o tipo de cargo/função do servidor |
| employeeSalary | text | Campo monetário contendo o valor do salário do servidor |

Esse é um exemplo em HTML
```html
    <h2>Pessoal</h2>
    <div itemscope itemtype="Unipt.org/EmployeeInformation">
        <table>
            <caption>Descrição</caption>
            <!-- Cabeçalho da tabela  -->
            <tr>
                <th itemprop="employeeName">Nome do Servidor</th>
                <th itemprop="identificationNumber">CPF</th>
                <th itemprop="employmentContractType">Tipo de vínculo</th>
                <th itemprop="employeePosition">Cargo</th>
                <th itemprop="employeeSalary">Salário</th>
            </tr>
            <!-- Dados referentes a certa linha da tabela  -->
            <tr>
                <td itemprop="employeeName">ABDENE FRANCISCO DA SILVA</th>
                <td itemprop="identificationNumber">XXX.582.004-XX</th>
                <td itemprop="employmentContractType">Contratação por excepcional interesse público</th>
                <td itemprop="employeePosition">INSTRUTOR DE BANDA</th>
                <td itemprop="employeeSalary">R$ 1.439,17</th>
            </tr>
        </table>
    </div>
```
