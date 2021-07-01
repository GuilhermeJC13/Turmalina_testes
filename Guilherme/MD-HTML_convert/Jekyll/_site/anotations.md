# Jekyll

* Várias pastas precisam ser adicionadas para seguir o padrão

* Muito sensível à mudanças

* Muito fácil de trazer os arquivos markdown, sendo necessário apenas uma linha de código para alterar o arquivo

## Como fazer a transição dos arquivos


_Ainda é necessário verificar a existência de mais métodos com finalidade de adicionar os arquivos_

* Crie um arquivo md vazio em site, nele adicione apenas o código a seguir:

```
---
layout: default
title: "Unipt.org"
---
```


* Mantenha os arquivos MD na pasta _include, em seguida, utilize o código a seguir para mostrar o texto:


```
{% capture _include %}{% include contratoTopicos.md %}{% endcapture %}{{ _include | markdownify }}
```

* https://stackoverflow.com/questions/41455133/how-do-you-programmatically-apply-a-css-class-to-paragraphs-in-jekyll