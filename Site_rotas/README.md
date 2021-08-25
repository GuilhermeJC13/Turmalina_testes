# Documentação do Padrão Turmalina

Essa documentação dará os passos de como montar a estrutura de dados dos municí

Aplicação construída com:
- [AngularJS v1.8.2](http://angularjs.org)
- [Zero-md](https://zerodevx.github.io/zero-md/)


## Estrutura MVC

A página principal renderiza componentes que renderizam arquivos markdown específicos.

Conteúdo de diretórios:
##### /archive
- Encontram-se os arquivos markdown
##### /assets
- Controllers: Delimita os controladores de escopo dos componentes
- Routes: Delimita as rotas dos componentes
- Scripts: Delimita as funções e features 
##### /views
- HTML e estilização dos componentes

## Server Vercel

Rotas amigáveis são previstas no arquivo vercel.json, visualização do sitemap.xml pela url `/sitemap` e demais rotas pelo `/`