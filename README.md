![License](https://img.shields.io/github/license/dannrocha/digital-menu)
![Repo size](https://img.shields.io/github/repo-size/dannrocha/digital-menu)
![Last commit](https://img.shields.io/github/last-commit/dannRocha/digital-menu)
![Dev](https://img.shields.io/badge/daniel%20rocha-dev-green)

# Digital Menu
Cardápio online de fácil gerenciamento. Aplicação web para apresentar um cardápio de lanchonete de forma online e com redirecionamento dos pedidos para Whatsapp. O cardápio é gerenciado por uma planilha (Google Sheets), na qual mudanças na planilha refletem nos dados do cardápio.


Cardápio: [Google SpreadSheet](https://docs.google.com/spreadsheets/d/1Hrhw7xC5NFxNyblD7aZ7afD1DFzHlSsQidav0e6Hshw/edit?usp=sharing)

Página: https://pizzariacolosso.github.io/digital-menu/

## Screenshot

<p align="center" display="flex">
  <img width="200px" src="screenshot/pagina-1.png" />
  <img width="200px" src="screenshot/popup-1.png" />
  <img width="200px" src="screenshot/pagina-2.png" />
</p>

<p align="center" display="flex">
  <img width="200px" src="screenshot/mobile-2.png" />
  <img width="200px" src="screenshot/popup-2.png" />
  <img width="200px" src="screenshot/mobile-1.png" />
</p>

##  Observação
Como não é usado uma API personalizada para aplicação, os dados do cardápio podem se torna inacessível caso o google remova ou altere a URL de obtenção dos dados.

## Project setup
* :pushpin: *![docker@20.10.8](https://img.shields.io/badge/Docker@20.10.8-%230077B6.svg?&style=flat-square&logo=docker&logoColor=white&color=384d54&labelColor=0db7ed)*
* :pushpin: *![docker-compose@1.29.2](https://img.shields.io/badge/Docker-Compose@1.29.2-%230077B6.svg?&style=flat-square&logo=docker&logoColor=white&color=384d54&labelColor=0db7ed)*

### Run

```
docker-compose up --build
```
