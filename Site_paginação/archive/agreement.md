# Convênios/Termos de Parceria/Contratos de repasse/termo de cooperação

O tipo Convênio possui diversas propriedades que representam as informações básicas que compõe um convênio administrativo. A seguir estão os nomes das propriedades definidas do tipo:

## Tipo: Agreement
| PROPERTY | EXPECTED TYPE | DESCRIPTION |
| ------ | ------ | ------ |
| agreementID | text | Campo referente ao número de identificação do convênio |
| grantorName | text |  Campo texto contendo o nome do concedente do convênio |
| contractorName | text | Campo texto contendo o nome do convenente do convênio |
| celebrationDate | date (DD/MM/YYYY) | Data referente à celebração do convênio |
| publicationDate | date (DD/MM/YYYY) | Data referente à publicação do convênio |
| validityDate | date (DD/MM/YYYY) | Data de vigência do convênio |
| object | text | Campo texto referente à descrição do objeto do convênio |
| agreementAmount | number:float | Campo monetário referente ao valor pactuado do convênio |
| counterpartAmount | text | Campo monetário referente a parcela de colaboração financeira do convenente para execução do objeto do convênio |

Esse é um exemplo em HTML
```
<html>
    <h2>Documento de Pagamento</h2>
    <div itemscope itemtype="Unipt.org/Agreement">
        <table>
            <caption>Descrição</caption>
            <!-- Cabeçalho da tabela  -->
            <tr>
                <th itemprop="agreementID">Número do Convênio</th>
                <th itemprop="grantorName">Concedente</th>
                <th itemprop="contractorName">Convenente</th>
                <th itemprop="celebrationDate">Data da Celebração</th>
                <th itemprop="publicationDate">Data da Publicação</th>
                <th itemprop="validityDate">Vigência</th>
                <th itemprop="object">Objeto</th>
                <th itemprop="agreementAmount">Valor Pactuado</th>
                <th itemprop="counterpartAmount">Valor da Contrapartida</th>
            </tr>
            <!-- Dados referentes a certa linha da tabela  -->
            <tr>
                <td itemprop="agreementID">903322</th>
                <td itemprop="grantorName">Ministério do Turismo - Unidades com vínculo direto</th>
                <td itemprop="contractorName">MUNICIPIO DE JOAO PESSOA</th>
                <td itemprop="celebrationDate"21/12/2020</th>
                <td itemprop="publicationDate">18/12/2020</th>
                <td itemprop="validityDate">21/12/2023</th>
                <td itemprop="object">Construcao de centro de apoio turistico adaptado no municipio de joao pessoa/pb.</th>
                <td itemprop="agreementAmount">R$ 22.087,74</th>
                <td itemprop="counterpartAmount">2.388,56</th>
            </tr>
        </table>
    </div>
</html>
```
