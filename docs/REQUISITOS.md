# REQUISITOS FUNCIONAIS
## RF1. Acessar lista de publicações
### casos de uso
```UML
o usuário abre a aplicação | o sistema retorna a lista de publicações
```

---
### wireframe
![How to create ListView in android ? - Technxt Code Labs](https://lh3.googleusercontent.com/proxy/CnAgt56gNhL3X2gA6uOVd2CyrVRj0UOUtojIQHxk8DqJFKURPAnHMw1iqbUG4NIke_OBZLLxvcank8pRh1GEQUKvH1w2uDE8Oy__xXpKYq_ZqwlA5g6aaJiab8eY9JZFtjG526jBNKOLR4pG6wiXg9a9tkwpwv4DP9s_KKLq4hnMGx9Hra3f_izVeV9E_O1Zb_vNscef)

---
### eventos e operações de sistema
| Evento  | Operação |
| --------| -------- |
| entrar  | carregarPublicacoes(pagina)  |
| recarregar  | carregarPublicacoes(pagina)  |

### diagrama de sequência
```mermaid
	sequenceDiagram
        Frontend->>PublicacaoController:carregarPublicacoes(pagina=1)
        PublicacaoController->>WebDriver:carregar(pagina)
        PublicacaoController->>WebDriver:titulos = extrairTitulos()
        PublicacaoController->>WebDriver:links = extrairLinks()
        PublicacaoController->>WebDriver:listaUltimaMsgEm = extrairDataUltimaMensagem()
        PublicacaoController->>PublicacaoFactory:publicacoes = criarInstanciasEmLote(titulos, links, listaUltimaMsgEm)
        PublicacaoController-->>Frontend: publicacoes
```

## RF2. Acessar publicação
```UML
o usuário clica no título do publicação | o sistema abre o link no navegador
```
### diagrama de sequência
```mermaid
	sequenceDiagram
        Frontend->>PublicacaoController:abrirPublicacao(link)
```

# ATORES
* Usuário
* WebDriver

# REGRAS DE NEGÓCIO