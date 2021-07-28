# Contrato

O tipo Contrato possui diversas propriedades que representam as informações básicas que compõe um contrato administrativo. A seguir estão os nomes das propriedades definidas do tipo:

## Tipo: Contract

| PROPERTY | EXPECTED TYPE | DESCRIPTION |
| ------ | ------ | ------ |
| managementUnitName | text | Campo texto contendo o nome da unidade gestora do setor interessado |
| managementUnitID | text | Campo numérico contendo o código da unidade gestora do setor interessado |
| contractorName | text | Campo texto contendo o nome do contratado |
| identificationNumber | text | Campo numérico contendo o CPF do contratado |
| publicationDate | date | Data referente à publicação do extrato de contrato formato (DD/MM/YYYY) |
| validityDate | date | Data de vigência do contrato (formação DD/MM/YYYY) |
| contractAmount | number:float | Campo monetário contendo o valor contratado |
| object | text | Campo referente à descrição do objeto do contrato |
| contractID | text | Campo texto contendo o código de identificação do contrato |

Esse é um exemplo em HTML
```html
    <h2>Contratos</h2>
    <div itemscope itemtype="Unipt.org/Contract">
        <table>
            <caption>Descrição</caption>
            <!-- Cabeçalho da tabela  -->
            <tr>
                <th itemprop="managementUnitName">Nome da unidade gestora</th>
                <th itemprop="managementUnitID">Código da unidade gestora</th>
                <th itemprop="contractID">Código do contrato</th>
                <th itemprop="contractorName">Nome do contrato</th>
                <th itemprop="identificationNumber">CNPJ</th>
                <th itemprop="object">Objeto do Contrato</th>
                <th itemprop="publicationDate">Data da publicação</th>
                <th itemprop="validityDate">Data de vigência</th>
                <th itemprop="contractAmount">Valor Contratado</th>
            </tr>
            <!-- Dados referentes a certa linha da tabela  -->
            <tr>
                <td itemprop="managementUnitName">Secretaria Municipal de Saúde</th>
                <td itemprop="managementUnitID">00000.000-0</th>
                <td itemprop="contractID">106122021</th>
                <td itemprop="contractorName">LOGER DISTRIBUIDORA DE MEDIC E MATERIAIS HOSPITALA</th>
                <td itemprop="identificationNumber">27.600.270/0001-90</th>
                <td itemprop="object">SISTEMA DE REGISTRO DE PREÇOS PARA A AQUISIÇÃO DE MEDICAMENTOS DA REDE HOSPITALAR E ESPECIALIZADA</th>
                <td itemprop="publicationDate">01/04/2021</th>
                <td itemprop="validityDate">31/12/2021</th>
                <td itemprop="contractAmount">R$ 410.205,50</th>
            </tr>
        </table>
    </div>
```