# Introdução ao Unipt utilizando o Microdata

## O que é e por que utilizar o Microdata?

Microdata é um tipo de linguagem de marcação embutida no HTML5 para melhorar a legibilidade das páginas web por máquinas. Esse tipo de linguagem de marcação atribui rótulos para identificar partes individuais do conteúdo, permitindo que mecanismos de busca e web crawlers possam extrair e processar os microdados de uma página da web. Ao utilizar este tipo de padrão para descrição de dados, você possibilita que mecanismos de busca entendam estas informações dentro do contexto semântico definido e facilita outras aplicações reconhecerem e importarem estes dados do seu site.

Em alto nível, microdata é uma especificação para incorporar dados legíveis por máquina em documentos HTML. Microdados consistem em pares nome/valor (conhecidos como itens) definidos de acordo com um vocabulário. Ao representar informações através do Microdata utilizamos elementos pertencentes a um vocabulário específico que deve ser referenciado no documento HTML. O vocabulário é a especificação das propriedades utilizadas e qual tipo de informação elas representam. Atualmente, vocabulários de microdata de propósito geral podem ser encontrados em sites como https://schema.org/, que contém especificações para descrever eventos, empresas, pessoas, produtos, etc. 

## O que é e por que utilizar o Unipt?

Seguindo essa perspectiva, o Unipt é um vocabulário desenvolvido para descrever tipos e propriedades utilizados em dados disponibilizados por portais de transparência fiscal. O objetivo do Unipt é ser um esquema de marcação de dados para tornar portais de transparência fiscal mais compreensíveis para mecanismos de busca e web crawlers. Nesta documentação, você poderá encontrar as propriedades referentes a cada tipo e uma descrição de suas finalidades e utilização.

Para adicionar informações ao seu conteúdo da web basta utilizar o vocabulário Unipt em conjunto com o Microdata. Este guia ajudará você a se familiarizar com o básico do Microdata e do Unipt, a fim de que você comece a adicionar marcações às suas páginas web.

## Sintaxe do Microdata

O modelo Microdata consiste em grupos de pares de nome/valor conhecidos como itens. Cada nome nos pares de nome/valor é definido como uma propriedade e cada propriedade tem um ou mais valores. O valor de uma propriedade pode ser uma string ou outro grupo de pares nome/valor (i.e um item).

O Microdata apresenta cinco atributos globais simples (disponíveis para uso de qualquer elemento HTML) que fornecem contexto para máquinas sobre seus dados. Os cinco atributos são: itemscope, itemtype, itemprop, itemid e itemref. Para o uso do Unipt, utilizaremos apenas os atributos itemscope, itemtype e itemprop. A seguir, vamos examiná-los em detalhes. 

| ATRIBUTO | DESCRIÇÃO |
| ------ | ------ |
| itemscope | Este atributo é utilizado para criar um item. O atributo itemscope é um atributo booleano que informa que há um modelo Microdata na página, demarcando no HTML onde ele inicia.  | 
| itemtype | O atributo itemtype contém como valor uma URL válida que define o tipo do item e fornece o contexto para as propriedades referentes a ele. | 
| itemprop | Este atributo define uma propriedade do item. | 

Como visto, a sintaxe básica inclui o atributo itemscope para definir um item e o atributo itemprop para descrever cada propriedade do item. Os tipos dos itens são especificados usando o atributo itemtype que assume valores de URLs válidas definidas através do vocabulário de escolha. Neste caso, podem assumir as URLs de cada tipo registrado no vocabulário Unipt; por exemplo, o Unipt define tipos como http://unipt.gov.pb/Bid ou http://tce.gov.pb/Contracts.

## Como marcar seu conteúdo usando o Microdata e o Unipt?

Vamos começar com um exemplo concreto. Imagine que tenhamos uma página que contém uma tabela com informações sobre licitações. Seu código HTML pode ser parecido com este:

```
 <div>
        <table>
            <caption>Descrição</caption>
            <!-- Cabeçalho da tabela  -->
            <tr>
                <th>Nome da unidade gestora</th>
                <th>Código da unidade gestora</th>
                <th>Número da licitação</th>
                <th>Modalidade de licitação</th>
                <th>Objeto da licitação</th>
                <th>Data da publicação</th>
                <th>Data de realização</th>
                <th>Nome do Participante</th>
                <th>CNPJ do paricipante</th>
                <th>Valor da proposta</th>
            </tr>
            <!-- Dados referentes a certa linha da tabela  -->
            <tr>
                <td>Secretaria Municipal de Saúde</td>
                <td>00000.000-0</td>
                <td>10.017/2021</td>
                <td>Pregão Eletrônico</td>
                <td>SISTEMA DE REGISTRO DE PREÇOS PARA A AQUISIÇÃO DE MEDICAMENTOS DA REDE HOSPITALAR E ESPECIALIZADA</td>
                <td>01/04/2021</td
                <td>01/03/2021</td
                <td>COMERCIAL VALFARMA LTDA</td
                <td>02.600.770/0001-09</td
                <td>R$ 3.535.816,11</td>
            </tr>
        </table>
    </div>
```
### itemscope e itemtype
Primeiramente precisamos identificar a seção da página que contém a tabela com as informações sobre licitações. Para isso, adicionamos o elemento itemscope à tag HTML que inclui as informações sobre o item que desejamos:


```
<div itemscope>
        <table>
            <caption>Descrição</caption>
            <!-- Cabeçalho da tabela  -->
            <tr>
                <th>Nome da unidade gestora</th>
                <th>Código da unidade gestora</th>
                <th>Número da licitação</th>
                <th>Modalidade de licitação</th>
                <th>Objeto da licitação</th>
                <th>Data da publicação</th>
                <th>Data de realização</th>
                <th>Nome do Participante</th>
                <th>CNPJ do paricipante</th>
                <th>Valor da proposta</th>
            </tr>
            <!-- Dados referentes a certa linha da tabela  -->
            <tr>
                <td>Secretaria Municipal de Saúde</td>
                <td>00000.000-0</td>
                <td>10.017/2021</td>
                <td>Pregão Eletrônico</td>
                <td>SISTEMA DE REGISTRO DE PREÇOS PARA A AQUISIÇÃO DE MEDICAMENTOS DA REDE HOSPITALAR E ESPECIALIZADA</td>
                <td>01/04/2021</td
                <td>01/03/2021</td
                <td>COMERCIAL VALFARMA LTDA</td
                <td>02.600.770/0001-09</td
                <td>R$ 3.535.816,11</td>
            </tr>
        </table>
    </div>
```

Ao adicionarmos o itemscope estamos especificando que o HTML contém um bloco <div> sobre um determinado item. Entretanto, não é suficiente especificar que existe um item no HTML sem especificar qual tipo de item é esse. Para tanto, podemos especificar o tipo do item utilizando o atributo itemtype imediatamente após o itemscope.
```
<div itemscope itemtype="Unipt.org/Bid">
        <table>
            <caption>Descrição</caption>
            <!-- Cabeçalho da tabela  -->
            <tr>
                <th>Nome da unidade gestora</th>
                <th>Código da unidade gestora</th>
                <th>Número da licitação</th>
                <th>Modalidade de licitação</th>
                <th>Objeto da licitação</th>
                <th>Data da publicação</th>
                <th>Data de realização</th>
                <th>Nome do Participante</th>
                <th>CNPJ do paricipante</th>
                <th>Valor da proposta</th>
            </tr>
            <!-- Dados referentes a certa linha da tabela  -->
            <tr>
                <td>Secretaria Municipal de Saúde</td>
                <td>00000.000-0</td>
                <td>10.017/2021</td>
                <td>Pregão Eletrônico</td>
                <td>SISTEMA DE REGISTRO DE PREÇOS PARA A AQUISIÇÃO DE MEDICAMENTOS DA REDE HOSPITALAR E ESPECIALIZADA</td>
                <td>01/04/2021</td
                <td>01/03/2021</td
                <td>COMERCIAL VALFARMA LTDA</td
                <td>02.600.770/0001-09</td
                <td>R$ 3.535.816,11</td>
            </tr>
        </table>
    </div>
```
Ao utilizarmos o itemtype estamos especificando que o item contido na <div> é sobre Licitações, como definido na documentação de tipos do Unipt. Como visto, os tipos dos itens são informados como URLs, neste caso https://Unipt.org/Bid.
### itemprop
Além de indicarmos o item no HTML com o itemscope e especificarmos sobre o que é o item com o itemtype, podemos indicar mais informações sobre esse item. No microdata chamamos essas informações adicionais sobre um item de propriedades. Para rotular as propriedades de um item utilizamos o atributo itemprop. Por exemplo, para identificar a modalidade da Licitação no HTML, adicionamos itemprop=”bidModality” ao elemento que envolve o nome da modalidade de licitação.

Observação: Neste link há uma lista completa de todas as propriedades que podemos associar a uma licitação.

```
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

## Unipt: tipos e propriedades
Durante todo o exemplo anterior, utilizamos o tipo Bid fornecido pelo vocabulário Unipt. Entretanto, o Unipt descreve uma variedade de outros tipos, cada um com seu próprio conjunto de propriedades que podem ser utilizadas para descrever os itens. Abaixo segue uma lista com os tipos do Unipt:

- Bid
- Contract
- Agreement
- BudgetRevenue
- BudgetExpenditure
- ExtraBudgetRevenue
- ExtraBudgetExpenditure
- CommitedExpenditure
- EmployeeInformation
- PlanningInstrument
- PaymentDocument

Você também pode ver uma lista completa com as propriedades de cada tipo.

## Unipt: Boas práticas
