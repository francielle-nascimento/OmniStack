# Overview
A API do backend é um recurso Node.js-based para comunicar com o DevRadar. Você pode usa-la para acessar dados e definir certas propriedades para usuários.  
Esta foi criada para servir à 10ª Semana da Omnistack desenvolvida pela Rocketseat.  
O Backend foi desenvolvido com a arquitetura MVC.

# Models: AulasJS
Este é o Model de Usuários (No caso da Omnistack, os Devs)  

## Estrutura
```Jason
{
  "_id": Gerado automaticamente,
  "github": "<User do GitHub>",
  "name": "<Nome do usuário>",//preenchimento automatico
  "bio": "<Descrição>",//preenchimento automatico
  "avatar_url": "<GitHub's Avatar URL>",//preenchimento automatico
  "techs": [ "<Vetor>", "<de>", "<Tecnologias>" ],
  "latitude":<conforme a localização do user>   
  "longitude":<conforme a localização do user>   
}

## Controllers
Aqui estão listados os controles da API do DevRadar, seus métodos, parâmetros e estrutura.

## Devs
Os Devs são os usuários do programa.

| Método       | Estrutura           | Ação                                  | Parâmetros          | Retorno       |
| ------------ | ------------------- | ------------------------------------- | ------------------- | ------------- |
| ![GET][1]    | `/api/devs`         | Lista todos os usuários cadastrados   | **Nenhum**          | JSON/Usuários |
| ![POST][2]   | `/api/devs`         | Cadastra um usuário no banco de dados | JSON/git,techs,geo  | JSON/Usuário  |
| ![GET][3]    | `/api/devs/:github` | Obtem os dados de um único usuário    | Rota/User do Github | JSON/Usuário  |
| ![PATCH][4]    | `/api/devs/:github` | Edita dados do usuário                | Rota + JSON/campos  | JSON/Qnt,ok   |
| ![DELETE][5] | `/api/devs/:github` | Deleta um usuário                     | Rota                | 200 OK        |

## Search
Este controlador serve para listar usuários porém em modo de pesquisa.  
Com este módulo é possível procurar por usuários em um raio de **10km** e com techs específicas.

| Método       | Estrutura     | Ação              | Parâmetros                     | Retorno       |
| ------------ | ------------- | ----------------- | ------------------------------ | ------------- |
| ![GET][6]    | `/api/search` | Pesquisa usuários | Query/techs,latitude,longitude | JSON/Usuários |


------------------------------------------------------------------------------------------------------------------------
