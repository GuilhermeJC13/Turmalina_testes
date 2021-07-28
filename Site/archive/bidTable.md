# Procedimentos Licitatórios

O tipo Contrato possui diversas propriedades que representam as informações básicas que compõe um contrato administrativo. A seguir estão os nomes das propriedades definidas do tipo:

## Tipo: Bid
| PROPERTY | EXPECTED TYPE | DESCRIPTION |
| ------ | ------ | ------ |
| managementUnitName | text | Campo texto contendo o nome da unidade gestora do setor interessado |
| managementUnitID | text | Campo texto contendo o código da unidade gestora do setor interessado |
| bidID | text | Campo texto contendo o código de identificação do contrato |
| bidModality | text | Campo texto contendo o nome da modalidade de licitação |
| object | text |Campo texto referente à descrição do objeto da licitação |
| publicationDate | date | Data referente à publicação do edital de licitação (formato (DD/MM/YYYY) |
| realizationDate | date | Data de realização da licitação (formato (DD/MM/YYYY) |
| bidderName | text | Campo texto contendo o nome do licitante (vencedor ou perdedor) |
| identificationNumber | text | Campo numérico contendo o CPF/CNPJ do licitante |
| bidderProposalAmount | number:float | Campo monetário contendo o valor do último lance da proposta do licitante |

Esse é um exemplo em HTML
```html
    <h2>Licitações</h1>
    <div itemscope itemtype="Unipt.org/Bid">
        <table>
            <caption>Descrição</caption>
            <!-- Cabeçalho da tabela  -->
            <tr>
                <th itemprop="managementUnitName">Nome da unidade gestora</th>
                <th itemprop="managementUnitID">Código da unidade gestora</th>
                <th itemprop="bidID">Número da licitação</th>
                <th itemprop="bidModality">Modalidade de licitação</th>
                <th itemprop="object">Objeto da licitação</th>
                <th itemprop="publicationDate">Data da publicação</th>
                <th itemprop="realizationDate">Data de realização</th>
                <th itemprop="bidderName">Nome do Participante</th>
                <th itemprop="identificationNumber">CNPJ do paricipante</th>
                <th itemprop="bidderProposalAmount">Valor da proposta</th>
            </tr>
            <!-- Dados referentes a certa linha da tabela  -->
            <tr>
                <td itemprop="managementUnitName">Secretaria Municipal de Saúde</th>
                <td itemprop="managementUnitID">00000.000-0</th>
                <td itemprop="bidID">10.017/2021</th>
                <td itemprop="bidModality">Pregão Eletrônico</th>
                <td itemprop="object">SISTEMA DE REGISTRO DE PREÇOS PARA A AQUISIÇÃO DE MEDICAMENTOS DA REDE HOSPITALAR E ESPECIALIZADA</th>
                <td itemprop="publicationDate">01/04/2021</th>
                <td itemprop="realizationDate">01/03/2021</th>
                <td itemprop="bidderName">COMERCIAL VALFARMA LTDA</th>
                <td itemprop="identificationNumber">02.600.770/0001-09</th>
                <td itemprop="bidderProposalAmount">R$ 3.535.816,11</th>
            </tr>
        </table>
    </div>
```