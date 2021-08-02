# Instrumentos de Planejamento

O tipo referente aos instrumentos de planejamento possui diferentes propriedades para representação dos documentos do Plano Plurianual e da Lei de Diretrizes Orçamentárias do município. A seguir estão os nomes das propriedades definidas do tipo:

## Tipo: PlanningInstrument

| PROPERTY | EXPECTED TYPE | DESCRIPTION |
| ------ | ------ | ------ |
| multiyearPlan | URL | Campo contendo o link do documento referente ao Plano Plurianual (PPA) do município |
| budgetGuidelinesLaw | URL |  Campo contendo o link do documento referente à Lei de Diretrizes Orçamentárias do município |

Esse é um exemplo em HTML
```html
    <h2>Instrumentos de Planejamento</h1>
    <div itemscope itemtype="Unipt.org/PlanningInstrument">
        <table>
            <caption>Descrição</caption>
            <!-- Cabeçalho da tabela  -->
            <tr>
                <th itemprop="multiyearPlan">Nome da unidade gestora</th>
                <th itemprop="budgetGuidelinesLaw">Código da unidade gestora</th>
            </tr>
            <!-- Dados referentes a certa linha da tabela  -->
            <tr>
                <td><a>href="http://pocinhos.pb.gov.br/wp-content/uploads/2021/01/LDO-2021-1.pdf">Lei de Diretrizes Orçamentárias 2021</a></td>
                <td><a>href="http://pocinhos.pb.gov.br/wp-content/uploads/2021/01/PPA-Plano-Plurianual-2018-2021.pdf">Lei de PPA – Plano Plurianual 2018-2021</a></td>
            </tr>
        </table>
    </div>
```
